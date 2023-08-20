const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_profile_skills', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_profiles',
        key: 'id'
      }
    },
    skills_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skills',
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
    tableName: 'user_profile_skills',
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
        name: "user_profile_id",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
      {
        name: "skills_id",
        using: "BTREE",
        fields: [
          { name: "skills_id" },
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
