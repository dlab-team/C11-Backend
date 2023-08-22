const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('certificates', {
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
    institution: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'certificates',
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
    ]
  });
};
