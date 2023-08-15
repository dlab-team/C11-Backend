const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INT,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'role',
  timestamps: false,
});

module.exports = Role;
