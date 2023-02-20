// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

exports.action = (path, callback) => {
  // Declare a route
  fastify.get(path, callback)
}

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()