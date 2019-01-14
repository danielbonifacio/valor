/**
 * hpnode
 * @author: Daniel Bonifacio <danielbonifacio@outlook.com>
 */
'use strict'

/**
 * Registra os alias para importação
 * Alias são meio que namespaces
 * 
 * Isso tem que vir antes de qualquer require!
 */
require('module-alias/register')


// Globals
global.Controller = require('Core/base/classes/controller.class')


// Módulos
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const registerControllers = require('Helpers/registerControllers')

// Instância da aplicação
const app = express()

// Plugins
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Registra todos os controllers da aplicação
registerControllers(app)


// Sobe o servidor na porta 3000
// TODO: parametrizar a porta e normalizar
module.exports = app
