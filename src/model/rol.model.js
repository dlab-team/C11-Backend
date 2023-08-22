import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../database/connection.js";

class Rol extends Model {}

Rol.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "roles",
    timestamps: false,
  }
);

export default Rol;
