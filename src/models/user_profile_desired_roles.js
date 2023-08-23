import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_profile_desired_roles extends Model {
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
    roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_profile_desired_roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
          { name: "roles_id" },
        ]
      },
      {
        name: "fk_user_profile_has_roles_roles1_idx",
        using: "BTREE",
        fields: [
          { name: "roles_id" },
        ]
      },
      {
        name: "fk_user_profile_has_roles_user_profile1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
    ]
  });
  }
}
