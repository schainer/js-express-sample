const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    });
  }
}

module.exports = Comment;
