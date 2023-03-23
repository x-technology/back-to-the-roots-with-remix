# Esbuild Remix Experiment

> DIY Let's do Remix today with own hands!

Alex Korzhikov - March, 2023

- How Remix Works
  - Example App
- Esbuild Experiment
- Summary
  - Problems

## [How Remix Works](https://remix.run/docs/en/main/pages/technical-explanation)

- compiler - server side and client side app, alongside with manifest meta information?

![How Compiler Works](assets/remix-compiler.png)

- server
  - serves routes come from build
  - adapters to transform routes to a particular http server
  - controller and view (not a model) - each route can contain loader, action, and default component
- client
  - hydration

![How Server and Client Work](assets/remix-server-and-client-work.png)

## Esbuild Experiment

### Goals

- Play around esbuild and compile javascript code
- Understand how remix works

![First Idea](assets/esbuild-experiment-high-level-1.png)

### Summary

![First Idea](assets/esbuild-experiment-high-level-1.png)

### Problems

### Links

- [Remix](https://remix.run/)
- [React Streaming In Depth: NextJS! Remix! DIY!- Jack Herrington](https://www.youtube.com/watch?v=o3JWb04DRIs)
- [Fundamentals of Redux Course from Dan Abramov](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)