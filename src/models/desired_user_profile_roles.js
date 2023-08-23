import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class desired_user_profile_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_profiles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_profiles',
        key: 'id'
      }
    },
    roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'desired_user_profile_roles',
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
        name: "fk_user_profiles_has_roles_roles1_idx",
        using: "BTREE",
        fields: [
          { name: "roles_id" },
        ]
      },
      {
        name: "fk_user_profiles_has_roles_user_profiles1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profiles_id" },
        ]
      },
    ]
  });
  }
}
