const Users = require('Models/user')

const Batata = new Controller({
  route: '/',

  get: [
    {
      endpoint: 'todos',
      /**
       * Recupera todos os usuário cadastrados no banco
       * @param {object} req requisição
       * @param {object} res resposta
       */
      run(req, res) {
        Users()
          .findAll({ attributes: ['id', 'nome'] })
          .then(usersFromDb => res.send({ users: usersFromDb }))
          .catch(error => res.send({ error }))
      },
    },
  ],

  /**
   * Cadastra um novo usuário e retora a lista atualizada
   * de usuários cadastrados
   * @param {object} req requisição
   * @param {object} res resposta
   */
  post(req, res) {
    Users()
      .create({
        nome: req.body.nome,
        email: req.body.email,
      }).then(() => {
        Users()
          .findAll()
          .then(usersFromDb => res.send({ users: usersFromDb }))
      })
  },

  delete: [
    {
      endpoint: ':id',
      /**
       * Deleta um usuário pelo id
       * @param {object} req requisição
       * @param {object} res resposta
       */
      run(req, res) {
        Users()
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then(() => res.send({ message: 'Usuário deletado com sucesso.' }))
          .catch(err => res.send({ err }))
      },
    },
  ],

  put: [
    {
      endpoint: ':id',
      /**
       * Atualiza um usuário pelo id
       * @param {object} req requisição
       * @param {object} res resposta
       */
      run(req, res) {
        const { id } = req.params
        const toUpdate = req.body

        Object.keys(toUpdate).map((key) => {
          if (toUpdate[key] === undefined) {
            delete toUpdate[key]
          }
        })

        Users()
          .update(toUpdate, {
            where: { id },
            returning: true,
            plain: true,
          })
          .then((data) => {
            if (process.env.DB_DRIVER === 'postgres') {
              res.send({ usuario: data[1] })
            } else {
              Users()
                .findById(id)
                .then(usuario => res.send({ usuario }))
            }
          })
          .catch(error => res.send({ error }))
      },
    },
  ],
})

module.exports = Batata
