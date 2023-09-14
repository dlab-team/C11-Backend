import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.STRING(200),
          allowNull: false,
          primaryKey: true,
        },
        first_name: {
          type: DataTypes.STRING(45),
          allowNull: false,
          validate: {
            len: {
              args: [3, 45],
              msg: "El campo nombre, recibe entre 3 a 45 caracteres",
            },
            is: {
              args: /^[\p{L}ñÑáéíóúÁÉÍÓÚ]+[- ]?[\p{L}ñÑáéíóúÁÉÍÓÚ]+$/u,
              msg: "El nombre solo acepta letras del alfabeto latino",
            },
          },
        },
        last_name: {
          type: DataTypes.STRING(45),
          allowNull: false,
          validate: {
            len: {
              args: [3, 45],
              msg: "El campo apellido, recibe entre 3 a 45 caracteres",
            },
            is: {
              args: /^[\p{L}ñÑáéíóúÁÉÍÓÚ]+[- ]?[\p{L}ñÑáéíóúÁÉÍÓÚ]+$/u,
              msg: "El apellido solo acepta letras del alfabeto latino",
            },
          },
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        roles_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "roles",
            key: "id",
          },
        },
        statuses_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "statuses",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "user",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "fk_user_roles1_idx",
            using: "BTREE",
            fields: [{ name: "roles_id" }],
          },
          {
            name: "fk_user_statuses1_idx",
            using: "BTREE",
            fields: [{ name: "statuses_id" }],
          },
        ],
      }
    );
  }
}
