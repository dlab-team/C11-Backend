import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_profile_has_skills extends Model {
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
    skills_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'skills',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_profile_has_skills',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
          { name: "skills_id" },
        ]
      },
      {
        name: "fk_user_profile_has_skills_skills1_idx",
        using: "BTREE",
        fields: [
          { name: "skills_id" },
        ]
      },
      {
        name: "fk_user_profile_has_skills_user_profile1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
    ]
  });
  }
}
