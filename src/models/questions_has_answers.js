import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class questions_has_answers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    questions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'questions',
        key: 'id'
      }
    },
    answers_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'answers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'questions_has_answers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questions_id" },
          { name: "answers_id" },
        ]
      },
      {
        name: "fk_questions_has_answers_answers1_idx",
        using: "BTREE",
        fields: [
          { name: "answers_id" },
        ]
      },
      {
        name: "fk_questions_has_answers_questions1_idx",
        using: "BTREE",
        fields: [
          { name: "questions_id" },
        ]
      },
    ]
  });
  }
}
