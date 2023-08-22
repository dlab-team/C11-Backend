const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_profile_soft_skills', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    soft_skill_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'soft_skills',
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
    }
  }, {
    sequelize,
    tableName: 'user_profile_soft_skills',
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
        name: "soft_skill_id",
        using: "BTREE",
        fields: [
          { name: "soft_skill_id" },
        ]
      },
      {
        name: "user_profile_id",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
    ]
  });
};
