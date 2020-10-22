const { default: fastify } = require("fastify");
// Startup
const app = require("./app");

async function startServer() {
  try {
    await app.listen(app.keys.port);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

startServer();
