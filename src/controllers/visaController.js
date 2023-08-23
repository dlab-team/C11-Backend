import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const visaController = {
  // Get all Visas
  getAll: async (req, res) => {
    try {
      const Visas = await models.visas.findAll();
      res.json(Visas);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo Visa." });
    }
  },

  // Get a Visa by ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const Visa = await Visa.findByPk(id);
      if (!Visa) {
        return res.status(404).json({ message: "Visa no encontrada." });
      }
      res.json(Visa);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo Visa." });
    }
  },
};

export default visaController;
