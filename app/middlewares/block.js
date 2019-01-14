module.exports = function(req, res, next) {
    if (req.params.id === 'block') {
        return res.send({ message: 'Acesso negago' })
    }

    next()
}