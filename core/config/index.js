module.exports = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    name: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
    host: process.env.DB_HOSTNAME,
    driver: process.env.DB_DRIVER,
  },
}
