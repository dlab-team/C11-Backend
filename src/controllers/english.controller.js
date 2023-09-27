import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const englishController = {
    // Get all roles
    getAll: async (req, res) => {
        try {
            const english = await models.english.findAll();
            res.json(english);
        } catch (error) {
            res.status(500).json({
                error: "Error consiguiendo ingles",
            });
        }
    },
};

export default englishController;