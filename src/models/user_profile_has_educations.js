import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_profile_has_educations extends Model {
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
    educations_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'educations',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_profile_has_educations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
          { name: "educations_id" },
        ]
      },
      {
        name: "fk_user_profile_has_educations_educations1_idx",
        using: "BTREE",
        fields: [
          { name: "educations_id" },
        ]
      },
      {
        name: "fk_user_profile_has_educations_user_profile1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
    ]
  });
  }
}
