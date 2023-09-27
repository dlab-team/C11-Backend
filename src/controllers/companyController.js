import sequelize from "../database/connection.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const companyController = {
  getAll: async (req, res) => {
    try {
      const companies = await models.companies.findAll();
      res.json(companies);
    } catch (error) {
      res.status(500).json({
        error: "Error getting companies"
      });
    }
  },
  createCompany: async (req, res) => {
    try {
      const {
        roles,
        ...companyData
      } = req.body;
      for (const prop in companyData) {
        if (typeof companyData[prop] === "string") {
          companyData[prop] = companyData[prop]
            .trim()
            .replace(/\s{2,}/g, " ")
            .toLowerCase();
        }
      }

      const allRoles = await models.roles.findAll();
      if (roles.length === 0) {
        return res.status(400).json({
          error: "invalid roles",
          msg: "Debe seleccionar al menos un cargo",
        });
      }
      const invalidRoles = roles.filter(
        (roleId) => !allRoles.some((role) => role.id === roleId)
      );

      if (invalidRoles.length > 0) {
        return res.status(400).json({
          error: "invalid roles",
          msg: "Cargos inválidos proporcionados.",
        });
      }

      const createdCompany = await models.companies.create(companyData);
      const companyId = createdCompany.id;

      if (roles && roles.length > 0) {
        const companyDesiredRoles = roles.map((roleId) => ({
          companies_id: companyId,
          roles_id: roleId,
        }));
        await models.companies_desired_roles.bulkCreate(companyDesiredRoles);
      }

      res.status(201).json({
        message: "Compañía creada exitosamente con roles relacionados con companies.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error
      });
    }
  },
};

export default companyController;