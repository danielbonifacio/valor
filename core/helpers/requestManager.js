module.exports = {
  getExcludes(req) {
    if ('exclude' in req.query) {
      const toExclude = req.query.exclude
      return toExclude.split(',')
    }
  },
  getIncludes(req) {
    if ('include' in req.query) {
      const toInclude = req.query.include
      return toInclude.split(',')
    }
  },
  getQuery(req) {
    const attr = {}
    let hasQuery = false
    if ('include' in req.query) {
      hasQuery = true
      attr.include = this.getIncludes(req)
    }
    if ('exclude' in req.query) {
      hasQuery = true
      attr.exclude = this.getExcludes(req)
    }
    return hasQuery
      ? { attributes: attr }
      : null
  },
}
