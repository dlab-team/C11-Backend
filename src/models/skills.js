import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class skills extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_skills_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type_skills',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'skills',
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
        name: "fk_skills_type_skills1_idx",
        using: "BTREE",
        fields: [
          { name: "type_skills_id" },
        ]
      },
    ]
  });
  }
}
