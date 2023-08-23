import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class matches extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    companies_desired_roles_companies_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'companies_desired_roles',
        key: 'companies_id'
      }
    },
    companies_desired_roles_roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'companies_desired_roles',
        key: 'roles_id'
      }
    },
    user_profile_desired_roles_user_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_profile_desired_roles',
        key: 'user_profile_id'
      }
    },
    user_profile_desired_roles_roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_profile_desired_roles',
        key: 'roles_id'
      }
    }
  }, {
    sequelize,
    tableName: 'matches',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companies_desired_roles_companies_id" },
          { name: "companies_desired_roles_roles_id" },
          { name: "user_profile_desired_roles_user_profile_id" },
          { name: "user_profile_desired_roles_roles_id" },
        ]
      },
      {
        name: "fk_companies_desired_roles_has_user_profile_desired_roles_u_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_desired_roles_user_profile_id" },
          { name: "user_profile_desired_roles_roles_id" },
        ]
      },
      {
        name: "fk_companies_desired_roles_has_user_profile_desired_roles_c_idx",
        using: "BTREE",
        fields: [
          { name: "companies_desired_roles_companies_id" },
          { name: "companies_desired_roles_roles_id" },
        ]
      },
    ]
  });
  }
}
