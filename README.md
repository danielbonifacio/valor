# hpnode

Esta é a documentação dessa estrutura. Siga e não questione. Se tiver em dúvida, a resposta sempre será: você não pode.

Mas, caso você sinta dificuldade, pode me chamar [@danielbonifacio](https://github.com/danielbonifacio).

> Se encontrar um Bug, abra uma Issue. As vezes nem é um bug.

# Compatibilidade

Essa estrutura foi desenvolvida em cima da versão 10.15.0 do node, mas deverá rodar na versão 8.24

**Core:**

- Express 4
- Node 10
- Sequelize 4

``` bash
# instala as dependencias
npm i

# roda o servidor de produção (sem livereload)
npm run production

# roda o servidor de desenvolvimento (com livereload)
npm run dev
```


# Desenvolvimento

Futuramente um linting será adicionado e, bem possivelmente, será com base na [style guide do AirBnb](https://github.com/airbnb/javascript).

## Controllers

O controller, aqui dentro, tem o papel de dar um norte e dizer o que precisa ser feito em determinada requisição.

Ele é um pouco diferente dos controllers tradicionais, pois ele aplica conceitos de rota nele mesmo.

Eis um exemplo de controller:
```js
module.exports = new Controller ({
    // path raiz de todas as requisições
    route: 'users',

    /**
     * Middlewares que esse controller irá ter
     */
    middlewares:{
        // em todos os verbos
        '*': [ require('Middlewares/Auth') ],

        // em metodos especificos (get, post, put, delete)
        post: [ require('Middlewares/DecryptData') ],
        put: [ require('Middlewares/DecryptData') ],
    },

    /**
     * Array de módulos
     * Um módulo é um SubController
     */
    get: [
        /**
         * Submódulo com verbo get
         * -----------------------
         * @endpoint: GET -> /users/:email?
         */
        {
            endpoint: ':email?',

            // array de middlewares que ESTE módulo irá ter
            middlewares: [],

            // método a ser executado
            run(req, res, next) {
                // seu código aqui...
            }
        }
    ],

    /**
     * Atalho para módulo
     * ------------------
     * @endpoint: POST -> /users
     */
    post(req, res, next) {
        // seu código aqui
    }
})
```

No exemplo acima, a estrutura e abordagens mais comuns foram documentadas.

**Caso o controller se encontre em uma subpasta, o nome dessa subpasta prefixará seu endpoint.**

Por exemplo, se houver um arquivo de controller em `Controllers/users/index.js` todos os meu módulos serão prefixados com `/users`.

# Models

Essa estrutura usa o Sequelize para gerenciar o banco de dados.

Exemplo de model:

``` js
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
```

Veja mais detalhes de implementação na [documentação do Sequelize](http://docs.sequelizejs.com/).

## Services

Você pode importar serviços pelo alias de Services de qualquer diretório:

```js
const myService = require('Services/MyService')
```

Existe um serviço padrão, que é o de conexão com o banco de dados e, atualmente, ele exporta uma conexão com o banco de dados usando o Sequelize.

## Middlewares

Essa estrutura é baseada em Express, e a forma que aplicamos middlewares é a mesma.

Um exemplo de middleware:

``` js
module.exports = function(req, res, next) {
    Token.isValid(req.header('Authorization'))
        ? next() // prossegue para o módulo ou próximo middleware
        : res
            .status(403)
            .send(helpers.messages.unauthorized)
}
```

## Helpers

Para não repetir e/ou poluir código, é mais inteligente que se crie helpers. Você pode criar os seus próprios Helpers compartihados em `/core/helpers`.

> Detalhe: você estará compartilhando espaço com helpers internos, como `requestManager` e `registerController`. Seja uma boa pessoa e respeite a privacidade destes dois. Sério, não quero trocar eles de lugar por que você pode fazer merda com eles.

Exemplo de Helper:
``` js
module.exports = () => console.log('hi')
```

``` js
const sayHi = require('Helpers/sayHi')

sayHi()
```

## Alias

Existem alguns alias de importação, que servem meio que como *namespaces*.

``` shell
Services    /app/services
Models      /app/models
Middlewares /app/middlewares
Core        /core
Helpers     /core/helpers
Config      /core/config
```

Você pode importar qualquer arquivo de qualquer diretório usando esses alias:

``` js
// /app/controllers/batata/teste.js
const Users = require('Models/User') // => require('../../models/user')
```
Use os alias para manter o código limpo e legível.

## Config

`/core/config`

Configurações diversas como dados de conexão com banco de dados, porta, etc. podem ser feitas no arquivo de configuração.
