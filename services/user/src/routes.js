// Routes

async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection("users");

  fastify.get("/", async (request, reply) => {
    return "Hello World!";
  });

  // Create a user

  // Read a user
  fastify.get("/:username", async (request, reply) => {
    const user = await this.userService.get(request.params.username)
    return user
  });

  //TODO: Remove route
  fastify.get("/all", async (request, reply) => {
    const users = await this.userService.getAll()
    return users;
  });
}

module.exports = routes;
