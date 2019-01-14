const Teste = new Controller('get', '/teste', (req, res) => {
    console.log('chegou')
    res
        .status(200)
        .send({
            message: 'Olá, jdashda!'
        })
})

module.exports = Teste
