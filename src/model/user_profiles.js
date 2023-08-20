const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_profiles', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    desired_position_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'desired_positions',
        key: 'id'
      }
    },
    employment_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employment_statuses',
        key: 'id'
      }
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cities',
        key: 'id'
      }
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    url_curriculum_vitae: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    url_linkedin: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    url_repository: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    url_portfolio: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    year_of_experiences: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    work_mode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'work_modes',
        key: 'id'
      }
    },
    availability: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'availabilities',
        key: 'id'
      }
    },
    relocation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ideal_job: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    proud_experience: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    salary_expectation: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_profiles',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "desired_position_id",
        using: "BTREE",
        fields: [
          { name: "desired_position_id" },
        ]
      },
      {
        name: "employment_status_id",
        using: "BTREE",
        fields: [
          { name: "employment_status_id" },
        ]
      },
      {
        name: "city_id",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "work_mode",
        using: "BTREE",
        fields: [
          { name: "work_mode" },
        ]
      },
      {
        name: "availability",
        using: "BTREE",
        fields: [
          { name: "availability" },
        ]
      },
    ]
  });
};
