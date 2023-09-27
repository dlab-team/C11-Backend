import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const employmentStatusController = {
  getAll: async (req, res) => {
    try {
      const employmentStatuses = await models.employment_statuses.findAll();
      res.json(employmentStatuses);
    } catch (error) {
      res.status(500).json({
        error: "Error consiguiendo employment_Statuses.",
      });
    }
  },
};

export default employmentStatusController;