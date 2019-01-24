# Middlewares

Middlewares follows the same pattern as in express.

It receives request, response and next as parameter, so i think you'll get it easily.

Here is an middleware example:

``` js
module.exports = function(req, res, next) {
    const token = new Token(req.header('Authorization'))
    token.isValid()
        ? next() // prossegue para o módulo ou próximo middleware
        : res
            .status(403)
            .send(helpers.messages.unauthorized)
}
```