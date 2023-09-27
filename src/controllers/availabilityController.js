import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const avaliabilityController = {
  // Get all avaliabilities
  getAll: async (req, res) => {
    try {
      const availabilities = await models.aviabilities.findAll();
      res.json(availabilities);
    } catch (error) {
      res.status(500).json({
        error: "Error obteniendo disponibilidad."
      });
    }
  },

};

export default avaliabilityController;