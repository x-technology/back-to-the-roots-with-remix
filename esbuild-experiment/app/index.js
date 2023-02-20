const { action } = require('@esbuild-experiment/server')
const { component } = require('@esbuild-experiment/client')

export const action = async (request, reply) => {
  return { hello: 'world' }
}

export const component = () => {
  <div>hello world</div>
}