#!/usr/bin/env node
import * as esbuild from "esbuild";
import path from "node:path";
import fs from "node:fs";

const routesPlugin = {
  name: "routes",
  setup(build) {
    build.onLoad({ filter: /.*/ }, async (args) => {
      console.log("args", args);

      // Load the file from the file system
      const source = await fs.promises.readFile(args.path, "utf8");
      const filename = path.relative(process.cwd(), args.path);
      console.log("source", source, filename);

      const result = await esbuild.transform(source, {
        jsx: "transform",
        loader: "jsx",
      });
      console.log("result", result.code);

      return {
        contents: result.code,
      };
    });
  },
};

await esbuild.build({
  entryPoints: ["index.jsx"],
  // bundle: true,
  platform: "node",
  plugins: [routesPlugin],
  loader: { ".js": "jsx" },
  outdir: "dist",
});
