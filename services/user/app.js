//TODO: Seperate into dev

// Fastify setup goes here
const fastify = require('fastify')({
    logger: true
})

// Routes
fastify.register(require('./routes'));

module.exports = fastify