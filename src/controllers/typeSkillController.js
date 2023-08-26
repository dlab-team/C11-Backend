import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const typeSkillController = {
  // Get all type skills
  getAll: async (req, res) => {
    try {
      const typeSkills = await models.type_skills.findAll();
      res.json(typeSkills);
    } catch (error) {
      res.status(500).json({ error: "Error consiguiendo type skills." });
    }
  },

  // Get a type skill by ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const typeSkill = await models.type_skills.findByPk(id);
      if (!typeSkill) {
        return res.status(404).json({ message: "Datos no encontrados" });
      }
      res.json(typeSkill);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo datos" });
    }
  },
};

export default typeSkillController;
