import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_profile_has_soft_skills extends Model {
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
    soft_skills_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'soft_skills',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_profile_has_soft_skills',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
          { name: "soft_skills_id" },
        ]
      },
      {
        name: "fk_user_profile_has_soft_skills_soft_skills1_idx",
        using: "BTREE",
        fields: [
          { name: "soft_skills_id" },
        ]
      },
      {
        name: "fk_user_profile_has_soft_skills_user_profile1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
    ]
  });
  }
}
