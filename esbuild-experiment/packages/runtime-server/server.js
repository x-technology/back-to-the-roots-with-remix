// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

exports.start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

exports.route = (path, callback) => {
  console.log("route", path, callback);
  fastify.get(path, callback);
};
