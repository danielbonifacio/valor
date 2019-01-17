module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },


      nome: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
      },

      telefone: {
        type: Sequelize.STRING,
      },


      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),

  down: queryInterface => queryInterface.dropTable('Users'),
}
