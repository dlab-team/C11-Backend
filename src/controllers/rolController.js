import Rol from "../model/rol.model.js";

const rolController = {
  // Get all roles
  getAll: async (req, res) => {
    try {
      const roles = await Rol.findAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: "Error getting roles." });
    }
  },

  // Get a role by ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const rol = await Rol.findByPk(id);
      if (!rol) {
        return res.status(404).json({ message: "Role not found." });
      }
      res.json(rol);
    } catch (error) {
      res.status(500).json({ error: "Error getting the role." });
    }
  },

  // Update a role by ID
  updateById: async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
      const rol = await Rol.findByPk(id);
      if (!rol) {
        return res.status(404).json({ message: "Role not found." });
      }
      rol.nombre = nombre; // Update the name or any other field as needed
      await rol.save();
      res.json(rol);
    } catch (error) {
      res.status(500).json({ error: "Error updating the role." });
    }
  },

  // Delete a role by ID
  deleteById: async (req, res) => {
    const { id } = req.params;
    try {
      const rol = await Rol.findByPk(id);
      if (!rol) {
        return res.status(404).json({ message: "Role not found." });
      }
      await rol.destroy();
      res.json({ message: "Role deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Error deleting the role." });
    }
  },
};

export default rolController;
