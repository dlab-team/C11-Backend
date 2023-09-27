import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const skillController = {

  getAll: async (req, res) => {
    try {
      const skills = await models.skills.findAll({
        include: {
          model: models.type_skills,
          as: "type_skill",
        },
      });

      res.json(skills);
    } catch (error) {
      res.status(500).json({
        error: "Error consiguiendo skills."
      });
    }
  },

  getById: async (req, res) => {
    const {
      id
    } = req.params;
    try {
      const skill = await models.skills.findByPk(id);
      if (!skill) {
        return res.status(404).json({
          message: "Datos no encontrados"
        });
      }
      res.json(skill);
    } catch (error) {
      res.status(500).json({
        error: "Error obteniendo datos"
      });
    }
  },
};

export default skillController;