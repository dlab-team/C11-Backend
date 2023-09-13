import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_profile_has_aviabilities extends Model {
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
    aviabilities_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aviabilities',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_profile_has_aviabilities',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
          { name: "aviabilities_id" },
        ]
      },
      {
        name: "fk_user_profile_has_aviabilities_aviabilities1_idx",
        using: "BTREE",
        fields: [
          { name: "aviabilities_id" },
        ]
      },
      {
        name: "fk_user_profile_has_aviabilities_user_profile1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
    ]
  });
  }
}
