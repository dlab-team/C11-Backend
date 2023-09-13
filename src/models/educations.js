import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class educations extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    carrer: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    institution_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    insitutions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'insitutions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'educations',
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
      {
        name: "fk_educations_insitutions1_idx",
        using: "BTREE",
        fields: [
          { name: "insitutions_id" },
        ]
      },
    ]
  });
  }
}
