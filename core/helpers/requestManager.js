module.exports = {
    getExcludes(req) {
        const toExclude = req.query.exclude
        return { exclude: toExclude.split(',') }
    }
}