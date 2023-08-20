import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../database/connection.js";

class TypeSkill extends Model {}

TypeSkill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "type_skills",
    timestamps: false,
  }
);

export default TypeSkill;
