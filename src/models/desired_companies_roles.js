import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class desired_companies_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    companies_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'companies',
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
    tableName: 'desired_companies_roles',
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
        name: "fk_roles_has_companies_companies1_idx",
        using: "BTREE",
        fields: [
          { name: "companies_id" },
        ]
      },
      {
        name: "fk_roles_has_companies_roles1_idx",
        using: "BTREE",
        fields: [
          { name: "roles_id" },
        ]
      },
    ]
  });
  }
}
