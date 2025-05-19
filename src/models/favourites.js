'use strict';


module.exports = (sequelize, DataTypes) => {
    const favourites = sequelize.define(
      'favourites',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        movie_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'favourites',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
          {
            unique: true,
            fields: ['user_id', 'movie_id'],
            name: 'unique_favorite_per_user',
          },
        ],
      }
    );
  
    favourites.associate = (models) => {
      favourites.belongsTo(models.users, {
        foreignKey: 'user_id',
        as: 'user',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    };
  
    return favourites;
  };