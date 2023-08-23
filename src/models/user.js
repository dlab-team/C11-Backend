import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    roles_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    statuses_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'statuses',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user',
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
        name: "fk_user_roles1_idx",
        using: "BTREE",
        fields: [
          { name: "roles_id" },
        ]
      },
      {
        name: "fk_user_statuses1_idx",
        using: "BTREE",
        fields: [
          { name: "statuses_id" },
        ]
      },
    ]
  });
  }
}
