#!/usr/bin/env node
import * as esbuild from 'esbuild'
import path from 'node:path'
import fs from 'node:fs'

let routesPlugin = {
  name: 'routes',
  setup(build) {
    build.onLoad({ filter: /.*/ }, async (args) => {
      console.log(args)

      // Load the file from the file system
      const source = await fs.promises.readFile(args.path, 'utf8')
      const filename = path.relative(process.cwd(), args.path)

      console.log(source, filename)

      return {
        contents: "{}"
      }
    })
  },
}

await esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  platform: 'node',
  // plugins: [routesPlugin],
  outfile: 'dist/server.js',
})