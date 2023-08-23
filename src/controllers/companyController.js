import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const companyController = {
  // Get all companies
  getAll: async (req, res) => {
    try {
      const companies = await models.companies.findAll();
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: "Error consiguiendo roles." });
    }
  },
  //Create company
  createCompany: async (req, res) => {
    try {
      const { roles, ...companyData } = req.body;

      // Crear la compañía
      const createdCompany = await models.companies.create(companyData);
      const companyId = createdCompany.id;
      console.log(
        "🚀 ~ file: companyController.js:24 ~ createCompany: ~ companyId:",
        typeof companyId
      );
      if (roles && roles.length > 0) {
        const companyDesiredRoles = roles.map((roleId) => ({
          companies_id: companyId,
          roles_id: roleId,
        }));
        await models.companies_desired_roles.bulkCreate(companyDesiredRoles);
      }

      res.status(201).json({
        message:
          "Compañía creada exitosamente con roles relacionados con companies.",
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error al crear la compañía y relacionar roles." });
    }
  },
};

export default companyController;
