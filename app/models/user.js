const sql = require('sequelize')
const db = require('Services/database')

const Model = {
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
    },
}

const User = db.define('user', Model)

/**
 * Recupera somente os indices que estão com default
 * value
 */
User.findSelected = (options) => new Promise((resolve, reject) => {
    

    User.findAll({ attributes: options || [] })
        .then(users => resolve(users))
        .catch(error => reject(error))
})

module.exports = User
