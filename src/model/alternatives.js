const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alternatives', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    alternative_a: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alternative_b: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alternative_c: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alternative_d: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'alternatives',
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
    ]
  });
};
