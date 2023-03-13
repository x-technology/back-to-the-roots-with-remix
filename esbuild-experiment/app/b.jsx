// const { action } = require('@esbuild-experiment/server')
// const { component } = require('@esbuild-experiment/web-dev-server')

export const route = async (request, reply) => {
  return { hello: 'api-b-world' } // data
}

export const component = () => (
  <div>hello b world</div>
)