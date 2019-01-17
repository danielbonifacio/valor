const Sequelize = require('sequelize')
const con = require('Config')

const { Op } = Sequelize

const { db } = con

module.exports = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  operatorsAliases: Op,
})
