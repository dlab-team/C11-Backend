import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

class Rol extends Model {}

Rol.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Rol",
  }
);

export default Rol;
