'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const teste = require('./controllers/teste')

console.log(teste)

app.get(teste.route, teste.methods.sayHello)

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('App running on http://localhost:3000')
})

