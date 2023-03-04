#!/usr/bin/env node
const { route, start } = require("./server.js");
const { search } = require("./lookup.js");
const { parse, relative, join } = require("node:path");

const getURL = (filePath) => {
  const { dir, name } = parse(filePath);
  const relativePath = relative(process.cwd(), dir);
  if (relativePath === "" && name === "index") {
    return "/";
  }

  return join(relativePath, name);
};

(async () => {
  const routes = await search();
  const filteredRoutes = routes
    .filter(({ filePath }) => /\.js$/.test(filePath) && !/dist/.test(filePath))
    .map(({ filePath }) => filePath)

  for (const filePath of filteredRoutes) {
    const url = getURL(filePath);
    const { route: actionRoute } = await import(filePath);
    route(url, actionRoute);
  }

  start();
})();
