const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visas_has_user_profiles', {
    visas_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'visas',
        key: 'id'
      }
    },
    user_profiles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_profiles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'visas_has_user_profiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "visas_id" },
          { name: "user_profiles_id" },
        ]
      },
      {
        name: "fk_visas_has_user_profiles_user_profiles1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profiles_id" },
        ]
      },
      {
        name: "fk_visas_has_user_profiles_visas1_idx",
        using: "BTREE",
        fields: [
          { name: "visas_id" },
        ]
      },
    ]
  });
};
