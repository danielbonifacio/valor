class Controller {
    constructor(verb, route, method) {
        this.route = route
        this.verb = verb
        this.method = method
    }
}

module.exports = Controller