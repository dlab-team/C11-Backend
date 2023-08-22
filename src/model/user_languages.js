const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_languages', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    languages_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'languages',
        key: 'id'
      }
    },
    user_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_profiles',
        key: 'id'
      }
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'levels',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_languages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "languages_id",
        using: "BTREE",
        fields: [
          { name: "languages_id" },
        ]
      },
      {
        name: "user_profile_id",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
      {
        name: "level_id",
        using: "BTREE",
        fields: [
          { name: "level_id" },
        ]
      },
    ]
  });
};
