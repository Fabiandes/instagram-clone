// DB connection and setup

const fastifyPlugin = require("fastify-plugin");
//TODO: Keys
//TODO: Error Handling
async function dbConnector(fastify, options) {
  const { dbPort, dbHost, dbName } = fastify.keys
  fastify.register(require("fastify-mongodb"), {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`,
    forceClose: true
  });
}

module.exports = fastifyPlugin(dbConnector);
