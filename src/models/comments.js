'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    movie_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'comments',
    underscored: true
  });

  comments.associate = function(models) {
    comments.belongsTo(models.users, { foreignKey: 'user_id' });
    comments.hasMany(models.comments, {
      as: 'replies',
      foreignKey: 'parent_id'
    });
  };

  return comments;
};
