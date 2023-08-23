import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class alternatives extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    alternative_a: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alternative_b: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alternative_c: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alternative_d: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'alternatives',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
