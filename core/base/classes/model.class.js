const db = require('Services/database')

class Model {
  constructor(name, model) {
    this.model = model
    this.name = name

    return this.initialize()
  }

  initialize() {
    return db.define(this.name, this.model)
  }
}

module.exports = Model
