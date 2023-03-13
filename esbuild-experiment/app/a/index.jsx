// const { action } = require('@esbuild-experiment/server')
// const { component } = require('@esbuild-experiment/web-dev-server')

export const route = async (request, reply) => {
  return { hello: 'index-a-world' } // data
}

export const component = () => {
  const data = typeof route

  return <div>hello index world</div>
}