import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_profile_has_visas extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_profile',
        key: 'id'
      }
    },
    visas_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'visas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_profile_has_visas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
          { name: "visas_id" },
        ]
      },
      {
        name: "fk_user_profile_has_visas_visas1_idx",
        using: "BTREE",
        fields: [
          { name: "visas_id" },
        ]
      },
      {
        name: "fk_user_profile_has_visas_user_profile1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
    ]
  });
  }
}
