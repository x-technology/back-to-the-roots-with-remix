#!/usr/bin/env node
const { route, start: startDevServer } = require("./server.js");
const { search } = require("./lookup.js");
const { parse, relative, join, basename } = require("node:path");

const getURL = (filePath) => {
  const { dir, name } = parse(filePath);
  const relativePath = relative(join(process.cwd(), "dist"), dir);

  console.log("filePath", filePath);
  if (relativePath === "" && name === "index") {
    return "/";
  }

  return join(relativePath, name);
};

const start = async () => {
  const routes = await search();
  const filteredRoutes = routes
    .filter(({ filePath }) => /\.js$/.test(filePath) && /dist/.test(filePath))
    .map(({ filePath }) => filePath);

  for (const filePath of filteredRoutes) {
    const url = getURL(filePath);
    const { route: actionRoute } = await import(filePath);
    route(url, actionRoute);
  }

  start();
}

if (process.argv.find(bin => basename(bin) === "dev-server") && process.argv.includes("start")) {
  startDevServer();
}

module.exports = {
  search,
  getURL,
};
