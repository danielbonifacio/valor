# Models

I raelly like to use non relational databases in my project, but sometimes I understand that isn't the best way. So I decided to not focus or select an master ORM to this project, and made an simple abstraction and provided an simple example with sequelize.

If you want to work with MySQL, MSSQL, Oracle or PostgreSQL, you can use sequelize without any problems.

I'm not a big fan of sequelize, but it is popular, so... sorry.

BTW, I think sequelize provides an simple way to define a strucure and export connections.

Theres an example of Model:

``` js
const sql = require('sequelize')
const db = require('Services/database')

const User = db.define('user', {
    id: {
        type: sql.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
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
```

or if you want to use sequelize migrations, you can adapt it to be hybrid:

``` js
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
    name: sequelize.STRING,
    email: sequelize.STRING,
    phone: sequelize.STRING,
  }, {

  })

  return User
}
```

If you decide to use hybrid model, you'll need to invoke your model like this:

``` js
await User()...
```