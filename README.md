# Documentação

Esta é a documentação dessa estrutura. Siga e não questione. Se tiver em dúvida, a resposta sempre será: você não pode.

Mas, caso você sinta dificuldade, pode me chamar [@danielbonifacio](https://github.com/danielbonifacio)

## Controller

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
    post(req, res) {
        // seu código aqui
    }
})
```

No exemplo acima, a estrutura e abordagens mais comuns foram documentadas.