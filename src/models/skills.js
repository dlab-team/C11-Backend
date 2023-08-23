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
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    type_skills_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type_skills',
        key: 'id'
      }
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'level',
        key: 'id'
      }
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
      {
        name: "fk_skills_level1_idx",
        using: "BTREE",
        fields: [
          { name: "level_id" },
        ]
      },
    ]
  });
  }
}
