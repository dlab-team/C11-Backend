const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quiestions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    statement: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    alternatives: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'alternatives',
        key: 'id'
      }
    },
    answer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quiestions',
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
        name: "alternatives",
        using: "BTREE",
        fields: [
          { name: "alternatives" },
        ]
      },
    ]
  });
};
