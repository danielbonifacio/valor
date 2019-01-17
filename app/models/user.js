const Sequelize = require('sequelize')
const DataBase = require('Services/database')

/**
 * User model
 * ----------
 * @param data database service
 * @param seql sequelize instance
 */
module.exports = (data, seql) => {
  const database = data || DataBase
  const sequelize = seql || Sequelize

  const User = database.define('User', {
    nome: sequelize.STRING,
    email: sequelize.STRING,
    telefone: sequelize.STRING,
  }, {

  })

  return User
}
