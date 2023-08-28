import { Model, DataTypes } from "sequelize";

export default class Companies extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        company: {
          type: DataTypes.STRING(45),
          allowNull: false,
          validate: {
            len: {
              args: [3, 45],
              msg: "El campo nombre de la empresa, recibe entre 3 a 45 caracteres",
            },
          },
        },
        reference_name: {
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
        reference_last_name: {
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
        reference_email: {
          type: DataTypes.STRING(45),
          allowNull: false,
          validate: {
            isEmail: {
              args: true,
              msg: "Ingrese un correo electronico valido",
            },
          },
        },
        reference_phone: {
          type: DataTypes.STRING(45),
          allowNull: false,
          validate: {
            is: {
              args: /^\+\d{2,3}\d{9}$/,
              msg: "Formato de numero telefónico no valido",
            },
          },
        },
        comment: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "companies",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
