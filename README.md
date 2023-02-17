# Back to the roots with Remix

The modern web would be different without rich client-side applications supported by powerful frameworks: React, Angular, Vue, Lit, and many others. These frameworks rely on client-side JavaScript, which is their core. However, there are other approaches to rendering. One of them (quite old, by the way) is server-side rendering entirely **without JavaScript**.
Let's find out if this is a good idea and how Remix can help us with it?

## Prerequisites

- Good understanding of JavaScript or TypeScript
- It would help to have experience with React, Redux, Node.js and writing FrontEnd and BackEnd applications
- [Preinstall Node.js, npm](https://nodejs.org/en/download/)
- We prefer to use `VSCode`, but also cloud IDEs such as [codesandbox](https://codesandbox.io) (other IDEs are also ok)

### Alex Korzhikov

![alex korzhikov photo](https://github.com/x-technology/PizzaScript/blob/main/assets/alex-black-white-open-source.png?raw=true)

Software Engineer, Netherlands

My primary interest is self development and craftsmanship. I enjoy exploring technologies, coding open source and enterprise projects, teaching, speaking and writing about programming - JavaScript, Node.js, TypeScript, Go, Java, Docker, Kubernetes, JSON Schema, DevOps, Web Components, Algorithms 👋 ⚽️ 🧑‍💻 🎧

- [AlexKorzhikov](https://twitter.com/AlexKorzhikov)
- [korzio](https://github.com/korzio)

### Pavlik Kiselev

![Pavlik](https://github.com/korzio/note/blob/master/docs/workshop/site/workshop/codelabs/assets/team/pavlik.jpg?raw=true)

Software Engineer, Netherlands

JavaScript developer with full-stack experience and frontend passion. He runs a small development agency [codeville.agency](https://codeville.agency/) and likes to talk about technologies they use: React, Remix and Serverless.

- [Pavlik Kiselev](https://www.linkedin.com/in/pavlik-kiselev-06993347/)
- [paulcodiny](https://github.com/paulcodiny)

# Code

- [Movies - CodeSandbox Project](https://codesandbox.io/p/sandbox/wandering-dream-xeomqw?file=%2Fapp%2Froutes%2Fmovies%2F%24movieId.reviews.tsx)
- [Movies - Github Repository](https://github.com/korzio/testcodesandbix)

# Agenda

# Meetings

## 2023-02-25

- wow?
  - [ ] ask twitter, conf
  - live coding
    - simpler
  - practice
    - more complicated to prepare and conduct

## 2023-02-17

```
- Page (movies/shawkank/comments)
  - List
    - Item
    - Item
    - Item
  - Item (url=id, fetch)
  - Comments
```

pavlik
- parrallel data load
- question: load state per component, why should we nest components in data flow?

alex
- [ ] comparison astro, nextjs?
  - how deep should we go? api overview, or deeper. esbuild configs. is remix treeshaking+transformation+build+runtime wrappers+optimizations+vuejs?
- it could validate routes consistency...
- [ ] maybe show the simplest remix implementation?
   - [ ] timebox todo alex
    -- 30 min? --
    express - route - middleware
      @controller -> route -> express.route
    index.js:
      action/route -> backend.js
      component react -> client.js
      esbuild + backend.config -> node backend.js + (server.js)?!
      esbuild + frontend.config -> frontend.js?!
- [ ] another agenda proposal
  - api overview
  - frameworks overview
  - build your remix like framework
    - is compilation part actually interesting?

- live plans
  - remix - part II
  - esbuild
  - remix theory
  - astro vs nextjs

## 2023-02-05

- https://github.com/korzio/testcodesandbix.git
- [x] remix.run/docs/en/v1/tutorials/jokes
  - https://remix.run/docs/en/v1/tutorials/jokes#build-logout-action
- [ ] alex
  - [ ] deeper into server side remix? arhictecture, videos
  - astro, nextjs? > later
- [ ] pavlik
  - layouts, full path data, no javascript flow with

## 2023-01-22

- [x] [state of js - Rendering Frameworks](https://2022.stateofjs.com/en-US/libraries/rendering-frameworks/)
- [x] [quickstart tutorial](https://remix.run/docs/en/v1/tutorials/blog)
- [x] Idea - to compare with other frameworks
- [ ] Agenda
  > instead of backend-frontend make a story and split this topics between us?
  - Introduction
  - Remix Overview
    - Definitions
      - Auth, DB, UI, styles, ...
      - [Stacks](https://remix.run/docs/en/v1/pages/stacks) - template
        - task - create your own stack?
    - Theory
      - Node.js Ecosystem
        - Frameworks Overview?
          - NextJS, Astro, Remix...
          [![Frameworks Overview](https://blog.logrocket.com/wp-content/uploads/2022/10/node-js-frameworks-types.png)](https://blog.logrocket.com/comparing-top-node-js-frameworks-frontend-developers/)
        - [Deeper into Remix](https://remix.run/docs/en/v1/pages/technical-explanation)
          - Compiler
          - HTTP Handler and Adapters
          - Server Framework
          - Browser Framework
      - `package.json`
        - Auth, cookies
      - What are `@remix-run`, `@remix-run/node`, `@remix-run/server-runtime`
      - [Prisma](https://prisma.io/)
      - `invariant` - TypeScript
      > restart needed when db or deps change
    - Frontend
      - `@remix-run/react`
      - dynamic segment
      - no javascript
      - sync data decomposition
- [x] Sat 28 Jan plans
  - write code - pavlik admin dashboard vs alex user dashboard
    - + nextjs, astro, ?
- [x] Application ideas?
  - user dashboard
    > e-commerce items managenemt
    - parallel requests
  - admin dashboard
    > owners to manage sales, customers, roles, users
    - no js + filters
- [x] Who does what?
- [x] Tasks - in github issues? Y
  - codespaces
  - codesandbox...
- [x] Alex Todos
  - [x] Alex to ask Daria on format - Online/Offline - 2 hours
    Online - 2 hours
    Decide on date
      -> 12-16 июня
    Description
  - [x] https://www.youtube.com/playlist?list=PLXoynULbYuEC8-gJCqyXo94RufAvSA6R3
  - [x] https://remix.run/blog/remix-stacks
- [ ] Pavlik Todos
  - [ ] Pavlik to ask ING FrontEnd Guild Workshop on format
    - March/April offline

---

This workshop will introduce participants to the Remix web framework, a new and innovative full-stack framework that allows developers to focus on building fast, resilient, and user-friendly web applications. The workshop will cover the basics of the framework and will guide participants through the process of building a simple web application from scratch. By the end of the workshop, participants will have a solid understanding of how to use Remix to create web applications that provide a seaml