const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Status = sequelize.define('Status', {
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
  tableName: 'status',
  timestamps: false,
});

module.exports = Status;
