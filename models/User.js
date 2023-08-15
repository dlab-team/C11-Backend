const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Role = require('./Role');
const Status = require('./Status');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INT,
    allowNull: false,
    primaryKey: true,
  },
  role_id: {
    type: DataTypes.INT,
    allowNull: true,
  },
  status_id: {
    type: DataTypes.INT,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

User.belongsTo(Role, { foreignKey: 'role_id' });
User.belongsTo(Status, { foreignKey: 'status_id' });

module.exports = User;
