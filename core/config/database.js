const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  dialect: process.env.DB_DRIVER || 'mysql',
}

module.exports = {
  ...config,
  development: config,
  test: config,
  production: config,
}
