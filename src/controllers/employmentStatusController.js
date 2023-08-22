import EmploymentStatuses from "../model/employment_statuses.js";

const employmentStatusController = {
  // Get all roles
  getAll: async (req, res) => {
    try {
      const employmentStatuses = await EmploymentStatuses.findAll();
      res.json(employmentStatuses);
    } catch (error) {
      res.status(500).json({
        error: "Error consiguiendo employment_Statuses.",
      });
    }
  },
};

export default employmentStatusController;
