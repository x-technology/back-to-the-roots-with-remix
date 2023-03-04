// const { action } = require('@esbuild-experiment/server')
// const { component } = require('@esbuild-experiment/client')

export const route = async (request, reply) => {
  return { hello: 'world' } // data
}

export const component = () => {
  <div>hello world</div>
}