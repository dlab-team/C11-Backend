import sequelize from "../database/connection.js";
import { Model, Sequelize, DataTypes } from "sequelize";

class EmploymentStatuses extends Model {}

EmploymentStatuses.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "employment_statuses",
    timestamps: false,
  }
);

export default EmploymentStatuses;
