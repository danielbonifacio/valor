const Teste = new Controller('get', '/teste/endpoint', (req, res) => {
    console.log('chegou')
    res
        .status(200)
        .send({
            message: 'Olá, Mundo!'
        })
})

module.exports = Teste
