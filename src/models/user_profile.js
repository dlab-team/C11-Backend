import _sequelize from "sequelize";
const {
  Model,
  Sequelize
} = _sequelize;

export default class user_profile extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      gender: {
        type: DataTypes.TINYINT,
        allowNull: false,
        validate: {
          isIn: {
            args: [
              ["1", "2", "3"]
            ], // Opciones válidas como cadenas
            msg: "Género inválido",
          },
        },
      },
      url_curriculum_vitae: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      url_repository: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      url_linkedin: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          isPhoneNumber: function (value) {
            if (!/^\+\d{1,4}-?\d{9,10}$/.test(value)) {
              throw new Error("Formato de número de teléfono no válido");
            }
          },
        },
      },
      years_of_experience: {
        type: DataTypes.TINYINT,
        allowNull: false,
        validate: {
          isIn: {
            args: [
              ["1", "2", "3", "4", "5"]
            ],
            msg: "Años de Experiencia no validos",
          },
        },
      },
      proud_experience: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      relocation: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      salary_expectations: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      work_mode_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "work_mode",
          key: "id",
        },
      },
      employment_statuses_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "employment_statuses",
          key: "id",
        },
      },
      english_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cities_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      file_curriculum_vitae: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      max_education_level: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      current_education_level: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      dream_job: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: "user_profile",
      timestamps: false,
      indexes: [{
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{
            name: "id"
          }],
        },
        {
          name: "fk_user_profile_user1_idx",
          using: "BTREE",
          fields: [{
            name: "user_id"
          }],
        },
        {
          name: "fk_user_profile_work_mode1_idx",
          using: "BTREE",
          fields: [{
            name: "work_mode_id"
          }],
        },
        {
          name: "fk_user_profile_employment_statuses1_idx",
          using: "BTREE",
          fields: [{
            name: "employment_statuses_id"
          }],
        },
        {
          name: "fk_user_profile_english1_idx",
          using: "BTREE",
          fields: [{
            name: "english_id"
          }, ]
        },
      ],
    });
  }
}