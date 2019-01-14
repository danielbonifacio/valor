'use strict'

global.Controller = require('../core/base/classes/controller.class')

const express = require('express')
const bodyParser = require('body-parser')
const registerControllers = require('../core/helpers/registerControllers')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

registerControllers(app)

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('App running on http://localhost:3000')
})

