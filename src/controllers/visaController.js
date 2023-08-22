import Visa from "../model/visas.js";

const visaController = {
  // Get all Visas
  getAll: async (req, res) => {
    try {
      const Visas = await Visa.findAll();
      res.json(Visas);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo Visa." });
    }
  },

  // Get a Visa by ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const Visa = await Visa.findByPk(id);
      if (!Visa) {
        return res.status(404).json({ message: "Visa no encontrada." });
      }
      res.json(Visa);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo Visa." });
    }
  },

  // Update a Visa by ID
  updateById: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const Visa = await Visa.findByPk(id);
      if (!Visa) {
        return res.status(404).json({ message: "No existe la Visa" });
      }
      Visa.nombre = nombre;
      await Visa.save();
      res.json(Visa);
    } catch (error) {
      res.status(500).json({ error: "Error actualiuzando los datos." });
    }
  },

  // Delete a Visae by ID
  deleteById: async (req, res) => {
    const { id } = req.params;
    try {
      const Visa = await Visa.findByPk(id);
      if (!Visa) {
        return res.status(404).json({ message: "Visa no encontrada." });
      }
      await Visa.destroy();
      res.json({ message: "Visa eliminada correctamente." });
    } catch (error) {
      res.status(500).json({ error: "Error La visa no ha sido encontrada." });
    }
  },
};

export default visaController;
