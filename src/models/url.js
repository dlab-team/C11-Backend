import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class url extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_profile',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'url',
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
        name: "fk_url_user_profile1_idx",
        using: "BTREE",
        fields: [
          { name: "user_profile_id" },
        ]
      },
    ]
  });
  }
}
