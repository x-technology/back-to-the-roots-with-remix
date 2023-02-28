#!/usr/bin/env node
import * as esbuild from 'esbuild'
import path from 'node:path'

let exampleOnResolvePlugin = {
  name: 'example',
  setup(build) {
    // Redirect all paths starting with "images/" to "./public/images/"
    build.onResolve({ filter: /^images\// }, args => {
      return { path: path.join(args.resolveDir, 'public', args.path) }
    })

    // Mark all paths starting with "http://" or "https://" as external
    build.onResolve({ filter: /^https?:\/\// }, args => {
      return { path: args.path, external: true }
    })
  },
}

await esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/server.js',
})