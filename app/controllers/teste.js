
class Controller {
    constructor(route, methods) {
        this.route = route
        this.methods = methods
    }
}

const Teste = new Controller('/teste/endpoint', {
    sayHello(req, res) {
        console.log('chegou')
        res
            .status(200)
            .send({
                message: 'Olá, Mundo!'
            })
    }
})

module.exports = Teste
