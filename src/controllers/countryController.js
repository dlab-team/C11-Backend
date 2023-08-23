import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const countryController = {
  // Get all contries
  getAll: async (req, res) => {
    try {
      const contries = await models.countries.findAll();
      res.json(contries);
    } catch (error) {
      res.status(500).json({ error: "Error consiguiendo paises." });
    }
  },

  // Get a coutry by ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const country = await models.countries.findByPk(id);
      if (!rol) {
        return res.status(404).json({ message: "País no encontrado" });
      }
      res.json(rol);
    } catch (error) {
      res.status(500).json({ error: "Error consiguiendo el país" });
    }
  },
};

export default countryController;
