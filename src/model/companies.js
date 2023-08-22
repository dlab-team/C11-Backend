const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('companies', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'matches',
        key: 'company'
      }
    },
    desired_positions: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'desired_positions',
        key: 'id'
      }
    },
    company: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    reference_user: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reference_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reference_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'companies',
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
        name: "desired_positions",
        using: "BTREE",
        fields: [
          { name: "desired_positions" },
        ]
      },
    ]
  });
};
