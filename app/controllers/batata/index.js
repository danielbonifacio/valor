const services = {
    hi: require('Services/mail')
}

const Batata = new Controller({
    route: '/batatas/:id?',
    
    middlewares: {
        'get': [ require('Middlewares/block') ],
    },

    get(req, res) {
        console.log("chegou pelo id: " + req.params.id)
        const batatas = require('Models/batata')
        res.send({ batatas })
    },
    post(req, res) {
        services.hi('a')

        res.send({
            post: req.body
        })
    }
})

module.exports = Batata
