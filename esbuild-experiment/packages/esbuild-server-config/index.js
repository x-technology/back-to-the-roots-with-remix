#!/usr/bin/env node
import * as esbuild from "esbuild";
import {relative} from "node:path";
import fs from "node:fs";
import {search} from "@esbuild-experiment/dev-server"

const staticImports = `import React from "react";`

const routesPlugin = {
  name: "routes",
  setup(build) {
    build.onLoad({ filter: /.*/ }, async (args) => {
      if (process.env["DEBUG"]) console.log("args", args);

      // Load the file from the file system
      const source = await fs.promises.readFile(args.path, "utf8");
      const filename = relative(process.cwd(), args.path);
      if (process.env["DEBUG"]) console.log("source", source, filename);

      const sourceWithImports = `/** staticImports **/ \n ${staticImports}; \n /** staticImports **/ \n ${source}`;

      const result = await esbuild.transform(sourceWithImports, {
        jsx: "transform",
        loader: "jsx",
      });

      if (process.env["DEBUG"]) console.log("result", result.code);
      // import

      return {
        contents: result.code,
      };
    });
  },
};

const allFiles = await search()
const entryPoints = allFiles
  .filter(({ filePath }) => /\.jsx$/.test(filePath) && !/dist/.test(filePath))
  .map(({ filePath }) => relative(process.cwd(), filePath));

if (process.env["DEBUG"]) console.log("entryPoints", entryPoints)

await esbuild.build({
  entryPoints,
  platform: "node",
  plugins: [routesPlugin],
  loader: { ".js": "jsx" },
  outdir: "dist",
});
