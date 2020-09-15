// Process ENV alternatives go here
module.exports = {
    port: process.env.PORT || 4000,
    dbPort: process.env.DB_PORT || 27017,
    dbHost: process.env.DB_HOST || "127.0.0.1",
    dbName: process.env.DB_NAME || "testdb",
}