const sql = require('sequelize')
const con = require('Config')
const Op = sql.Op;

const { db } = con

module.exports = new sql(db.name, db.user, db.pass, {
    host: db.host,
    dialect: db.driver,
    operatorsAliases: Op,
})