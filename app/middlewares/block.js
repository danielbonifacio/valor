module.exports = (req, res, next) => {
  if (req.params.id === 'block') {
    return res.send({ message: 'Acesso negago' })
  }

  return next()
}
