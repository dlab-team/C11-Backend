import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class companies extends Model {
  static init(sequelize, DataTypes) {
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
        },
        reference_user: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        reference_email: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        reference_phone: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        comment: {
          type: DataTypes.STRING(45),
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
