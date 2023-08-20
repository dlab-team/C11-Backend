import SoftSkill from "../model/soft_skills.js";

const softSkillsController = {
  // Get all soft skills
  getAll: async (req, res) => {
    try {
      const softSkills = await SoftSkill.findAll();
      res.json(softSkills);
    } catch (error) {
      res.status(500).json({ error: "Error consiguiendo soft skills." });
    }
  },

  // Get a soft skill by ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const softSkill = await SoftSkill.findByPk(id);
      if (!softSkill) {
        return res.status(404).json({ message: "Datos no encontrados" });
      }
      res.json(softSkill);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo datos" });
    }
  },
};

export default softSkillsController;
