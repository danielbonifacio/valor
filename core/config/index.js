const db = require('./database')

module.exports = {
  db,
  app: {
    port: process.env.PORT || 3000,
  },
}
