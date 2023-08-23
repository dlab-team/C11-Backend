import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_profile_has_tests extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_profile',
        key: 'id'
      }
    },
    tests_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tests',
        key: 'id'
      }
    },
    skills_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skills',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_profile_has_tests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
          { name: "tests_id" },
        ]
      },
      {
        name: "fk_user_profile_has_tests_tests1_idx",
        using: "BTREE",
        fields: [
          { name: "tests_id" },
        ]
      },
      {
        name: "fk_user_profile_has_tests_user_profile1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
      {
        name: "fk_user_profile_has_tests_skills1_idx",
        using: "BTREE",
        fields: [
          { name: "skills_id" },
        ]
      },
    ]
  });
  }
}
