import sequelize from "../database/connection.js";
import { Model, Sequelize, DataTypes } from "sequelize";

class SoftSkills extends Model {}

SoftSkills.init(
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
    tableName: "soft_skills",
    timestamps: false,
  }
);

export default SoftSkills;
