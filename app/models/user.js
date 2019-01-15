const sql = require('sequelize')
const db = require('Services/database')

const User = db.define('user', {
    id: {
        type: sql.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sql.STRING,
        unique: true,
    },
    email: {
        type: sql.STRING,
        unique: true,
        select: false,
    },
})

module.exports = User
