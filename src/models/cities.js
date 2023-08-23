import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cities extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    states_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'states',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cities',
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
        name: "fk_cities_states_idx",
        using: "BTREE",
        fields: [
          { name: "states_id" },
        ]
      },
    ]
  });
  }
}
