const sql = require('sequelize')
const con = require('Config')

const { db } = con

module.exports = new sql(db.name, db.user, db.pass, {
    host: db.host,
    dialect: db.driver,
})