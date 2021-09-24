const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name:{
        type: Sequelize.STRING(20),
        allowNull: false
      },
      age:{
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    })
  }
}

module.exports = User
