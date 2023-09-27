import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const levelController = {
  getAll: async (req, res) => {
    try {
      const levels = await models.level.findAll();
      res.json(levels);
    } catch (error) {
      res.status(500).json({
        error: "Error consiguiendo levels",
      });
    }
  },
};

export default levelController;