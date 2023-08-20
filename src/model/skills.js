const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "skills",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      type_skills_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "type_skills",
          key: "id",
        },
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "skills",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "type_skills_id",
          using: "BTREE",
          fields: [{ name: "type_skills_id" }],
        },
      ],
    }
  );
};
