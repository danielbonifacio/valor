require('dotenv-safe').load()

const app = require('./app')
const con = require('Config')

const db = require('Services/database')

db
    .authenticate()
    .then(() => {
        app.listen(con.app.port)
    })
    .catch(err => {
        console.log(err)
    })