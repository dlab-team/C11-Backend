const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matches', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    user_profiles: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_profiles',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matches',
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
        name: "company",
        using: "BTREE",
        fields: [
          { name: "company" },
        ]
      },
      {
        name: "user_profiles",
        using: "BTREE",
        fields: [
          { name: "user_profiles" },
        ]
      },
    ]
  });
};
