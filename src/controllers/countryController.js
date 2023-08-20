import Country from "../model/countries.js";

const countryController = {
  // Get all contries
  getAll: async (req, res) => {
    try {
      const contries = await Country.findAll();
      res.json(contries);
    } catch (error) {
      res.status(500).json({ error: "Error consiguiendo paises." });
    }
  },

  // Get a coutry by ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const country = await Country.findByPk(id);
      if (!rol) {
        return res.status(404).json({ message: "País no encontrado" });
      }
      res.json(rol);
    } catch (error) {
      res.status(500).json({ error: "Error consiguiendo el país" });
    }
  },

  // Update a country by ID
  updateById: async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
      const country = await Country.findByPk(id);
      if (!rol) {
        return res.status(404).json({ message: "No existe el rol" });
      }
      Country.nombre = nombre; // Update the name or any other field as needed
      await Country.save();
      res.json(rol);
    } catch (error) {
      res.status(500).json({ error: "Error updating the role." });
    }
  },

  // Delete a role by ID
  deleteById: async (req, res) => {
    const { id } = req.params;
    try {
      const rol = await Country.findByPk(id);
      if (!rol) {
        return res.status(404).json({ message: "Role not found." });
      }
      await Country.destroy();
      res.json({ message: "Role deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Error deleting the role." });
    }
  },
};

export default countryController;
