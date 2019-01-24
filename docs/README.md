# Valor

## Introduction

Valor was made to be simple and clean. Not for large scale apps. You may use it for simple and clean applications, or even to prototype something. And yes, it can be used in production.

Feel free to get in touch with me if you need help: [@danielbonifacio](https://github.com/danielbonifacio).

**If you find any bug, please, open an issue or make an PR** :smile:

## Compatibility

This strucuture was built on node v10.15, but can be used in v8.2 without any problems.


## Getting started

I didn't made a CLI or something like that, cause it'll be useless (at least in this moment).

To use it you can simply clone the master branch in the Valor's repo and truncate git and doc files:

``` bash
git clone https://github.com/danielbonifacio ./my-project

cd my-project

npm install && npm run truncate
```

## Alias

Valor provides some module alias, wich can be used like namespaces.

``` shell
Services    /app/services
Models      /app/models
Middlewares /app/middlewares
Core        /core
Helpers     /core/helpers
Config      /core/config
```

You can import any file from aliased directory like this:

``` js
// /app/controllers/batata/teste.js
const Users = require('Models/User') // => require('../../models/user')
```
Use os alias para manter o código limpo e legível.
