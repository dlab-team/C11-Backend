import Avaliability from "../model/availabilities.js";

const avaliabilityController = {
  // Get all avaliabilities
  getAll: async (req, res) => {
    try {
      const availabilities = await Avaliability.findAll();
      res.json(availabilities);
    } catch (error) {
      res.status(500).json({ error: "Error obteniendo disponibilidad." });
    }
  },

  // Get a avaliability by ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const avaliability = await Avaliability.findByPk(id);
      if (!avaliability) {
        return res
          .status(404)
          .json({ message: "disponibilidad no encontrada." });
      }
      res.json(avaliability);
    } catch (error) {
      res.status(500).json({ error: "Error." });
    }
  },

  // Update a avaliability by ID
  updateById: async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
      const avaliability = await Avaliability.findByPk(id);
      if (!avaliability) {
        return res.status(404).json({ message: "No existe en el registro" });
      }
      avaliability.nombre = nombre;
      await avaliability.save();
      res.json(avaliability);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando los datos." });
    }
  },

  // Delete a avaliabilitye by ID
  deleteById: async (req, res) => {
    const { id } = req.params;
    try {
      const avaliability = await Avaliability.findByPk(id);
      if (!avaliability) {
        return res.status(404).json({ message: "dato no encontrado." });
      }
      await avaliability.destroy();
      res.json({ message: " eliminada correctamente." });
    } catch (error) {
      res.status(500).json({ error: "Error, no ha sido encontrada." });
    }
  },
};

export default avaliabilityController;
