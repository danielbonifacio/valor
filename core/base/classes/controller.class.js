class Controller {
    constructor(controller) {
        this.route = controller.route
        this.get = controller.get || false
        this.post = controller.post || false
        this.delete = controller.delete || false
        this.put = controller.put || false
        this.middlewares = controller.middlewares || []
    }
}

module.exports = Controller