import sequelize from "../database/connection.js";
import { Model, Sequelize, DataTypes } from "sequelize";

class Visa extends Model {}

Visa.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "visas",
    timestamps: false,
  }
);

export default Visa;
