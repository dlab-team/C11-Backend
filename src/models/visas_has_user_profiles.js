import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class visas_has_user_profiles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
  }
}
