const users = require('Models/user')
const requestManager = require('Helpers/requestManager')

const Batata = new Controller({
    route: '/',

    get: [
        {
            endpoint: 'todos/:id',
            middlewares: [
                require('Middlewares/block')
            ],
            /**
             * Recupera todos os usuário cadastrados no banco
             * @param {object} req requisição
             * @param {object} res resposta
             */
            run(req, res) {
                users
                    .findAll({ attributes: ['id', 'nome'] })
                    .then(users => res.send({ users }))
                    .catch(error => res.send({ error }))
            }
        }
    ],

    /**
     * Cadastra um novo usuário e retora a lista atualizada
     * de usuários cadastrados
     * @param {object} req requisição
     * @param {object} res resposta
     */
    post(req, res) {
        users.create({
            nome: req.body.nome,
            email: req.body.email
        }).then((user) => {
            console.log(user)
            users.findAll()
                .then((users) => res.send({ users }))
        })
    }
})

module.exports = Batata
