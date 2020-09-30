//TODO: Seperate into dev

// Fastify setup goes here
const fastify = require("fastify")({
  logger: true,
});

// PLUGINS

fastify.register(require("./db"));

// ROUTES

fastify.register(require("./routes"));

// DECORATIONS

fastify.decorate("keys", require("./keys"));

// HOOKS

// SERVICES
fastify.decorate("userService", require("./user"));

module.exports = fastify;
