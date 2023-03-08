#!/usr/bin/env node
const { addRoute, start } = require("./server.js");
const { search } = require("./lookup.js");
const { parse, relative, join, basename } = require("node:path");

const getURL = (filePath) => {
  let { dir, name } = parse(filePath);
  const relativePath = relative(join(process.cwd(), "dist"), dir);


  if (relativePath === "" && name === "index") {
    return "/";
  }

  if (name === "index") {
    name = "/";
  }

  return join("/", relativePath, name);
};

const addRoutes = async () => {
  const files = await search(join(process.cwd(), "dist"));
  const filteredRoutes = files
    .filter(({ filePath }) => /\.js$/.test(filePath) && /dist/.test(filePath))
    .map(({ filePath }) => filePath);

  if (process.env["DEBUG"]) console.log("filteredRoutes", filteredRoutes)

  for (const filePath of filteredRoutes) {
    const url = getURL(filePath);

    if (process.env["DEBUG"]) console.log("add url", url)
    const { route: actionRoute } = await import(filePath);
    addRoute(url, actionRoute);
  }
}

if (process.argv.find(bin => basename(bin) === "dev-server") && process.argv.includes("start")) {
  (async () => {
    await addRoutes();
    start();
  })()
}

module.exports = {
  getURL,
  addRoutes,
  start,
};
