# Helpers

Helpers are a quite handy during the development process. I would like to bring some of my favourite by default, but maybe in future.

You can create and export your helpers at `/core/helpers` directory.

> **Caution:** this directory already contains **Core** helpers, like `requestManager` and `controllerRegister`. Don't delete them, or the app will break.

Here is an helper example:

``` js
module.exports = () => console.log('hi')
```

``` js
const sayHi = require('Helpers/sayHi')

sayHi()
```
