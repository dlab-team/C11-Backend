import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tests_has_questions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tests_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tests',
        key: 'id'
      }
    },
    questions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'questions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tests_has_questions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tests_id" },
          { name: "questions_id" },
        ]
      },
      {
        name: "fk_tests_has_questions_questions1_idx",
        using: "BTREE",
        fields: [
          { name: "questions_id" },
        ]
      },
      {
        name: "fk_tests_has_questions_tests1_idx",
        using: "BTREE",
        fields: [
          { name: "tests_id" },
        ]
      },
    ]
  });
  }
}
