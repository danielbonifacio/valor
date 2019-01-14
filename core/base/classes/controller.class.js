class Controller {
    constructor(controller) {
        this.services = controller.services || {}
        this.middlewares = controller.middlewares || {}
        this.route = controller.route
        
        this.get = controller.get || false
        this.post = controller.post || false
        this.delete = controller.delete || false
        this.put = controller.put || false
    }

    services(name) {
        return this.services[name]
    }
}

module.exports = Controller