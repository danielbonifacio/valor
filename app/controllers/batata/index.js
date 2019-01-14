const Batata = new Controller({
    route: '/batatas/:id?',
    get(req, res) {
        console.log("chegou pelo id: " + req.params.id)
        const batatas = require('Models/batata')
        res.send({ batatas })
    },
})

module.exports = Batata