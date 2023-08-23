import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class companies_desired_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    companies_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'companies',
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
    tableName: 'companies_desired_roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companies_id" },
          { name: "roles_id" },
        ]
      },
      {
        name: "fk_companies_has_roles_roles1_idx",
        using: "BTREE",
        fields: [
          { name: "roles_id" },
        ]
      },
      {
        name: "fk_companies_has_roles_companies1_idx",
        using: "BTREE",
        fields: [
          { name: "companies_id" },
        ]
      },
    ]
  });
  }
}
