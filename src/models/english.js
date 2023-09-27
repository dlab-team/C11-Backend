import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class english extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idenglish: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'english',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idenglish" },
        ]
      },
    ]
  });
  }
}
