const Sequelize = require('sequelize')
const con = require('Config')

const { Op } = Sequelize

const { db } = con

module.exports = new Sequelize(db.name, db.user, db.pass, {
  host: db.host,
  dialect: db.driver,
  operatorsAliases: Op,
})
