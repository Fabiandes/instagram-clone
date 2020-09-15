const { default: fastify } = require('fastify');
// Startup
const app = require('./app');

//Import ENV Variables
const { port } = require('./keys');

async function startServer(){
    try {
        await app.listen(port);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

startServer()