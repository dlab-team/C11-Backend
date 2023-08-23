import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class match extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    desired_user_profile_roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'desired_user_profile_roles',
        key: 'id'
      }
    },
    desired_companies_roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'desired_companies_roles',
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
    tableName: 'match',
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
        name: "unique_desired_roles",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "desired_user_profile_roles_id" },
          { name: "desired_companies_roles_id" },
        ]
      },
      {
        name: "fk_desired_user_profile_roles_has_desired_companies_roles_d_idx",
        using: "BTREE",
        fields: [
          { name: "desired_companies_roles_id" },
        ]
      },
      {
        name: "fk_desired_user_profile_roles_has_desired_companies_roles_d_idx1",
        using: "BTREE",
        fields: [
          { name: "desired_user_profile_roles_id" },
        ]
      },
    ]
  });
  }
}
