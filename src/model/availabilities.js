import sequelize from "../database/connection.js";
import { Model, Sequelize, DataTypes } from "sequelize";

class Avaliability extends Model {}

Avaliability.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    availability: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "availabilities",
    timestamps: false,
  }
);

export default Avaliability;
