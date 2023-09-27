import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const insitutionsController = {
    // Get all roles
    getAll: async (req, res) => {
        try {
            const insitutions = await models.insitutions.findAll();
            res.json(insitutions);
        } catch (error) {
            res.status(500).json({
                error: "Error consiguiendo ingles",
            });
        }
    },
};

export default insitutionsController;