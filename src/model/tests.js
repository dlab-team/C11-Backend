const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tests', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_profile_skills: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_profile_skills',
        key: 'id'
      }
    },
    quiestion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'quiestions',
        key: 'id'
      }
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tests',
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
        name: "user_profile_skills",
        using: "BTREE",
        fields: [
          { name: "user_profile_skills" },
        ]
      },
      {
        name: "quiestion",
        using: "BTREE",
        fields: [
          { name: "quiestion" },
        ]
      },
    ]
  });
};
