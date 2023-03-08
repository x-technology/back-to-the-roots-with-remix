// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

exports.start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  } finally {
    console.log("start dev server")
  }
};

exports.addRoute = (path, callback) => {
  if (process.env["DEBUG"]) console.log("add route", path);
  fastify.get(path, callback);
};
