// Routes

async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection('users')

  fastify.get("/", async (request, reply) => {
    return "Hello World!";
  });

  // Create a user

  // Read a user

  //TODO: Remove route
  fastify.get("/all", async (request, reply) => {
    const users = collection.find().toArray()
    return users;
  });
}

module.exports = routes;
