module.exports = new Controller({
  route: 'lol',
  get(req, res) {
    res.send({ message: 'bem vindo!!!!!' })
  },
})
