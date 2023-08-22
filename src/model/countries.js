import sequelize from "../database/connection.js";
import { Model, Sequelize, DataTypes } from "sequelize";

class Country extends Model {}

Country.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "countries",
    timestamps: false,
  }
);

export default Country;
