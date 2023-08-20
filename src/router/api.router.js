import express from "express";
import rolController from "../controllers/rolController.js"; // Make sure to provide the correct path to the controller
import countryController from "../controllers/countryController.js";
import visaController from "../controllers/visaController.js";
import avaliabilityController from "../controllers/availabilitiesController.js";
import softSkillsController from "../controllers/softSkillsController.js";
import employmentStatusController from "../controllers/employmentStatusController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bienvenido a la API");
  console.log("Conectado a la API");
});

// Get all roles
router.get("/roles", rolController.getAll);
//get all countries
router.get("/countries", countryController.getAll);
//get all visa
router.get("/visas", visaController.getAll);
//get all avaliability
router.get("/avaliabilities", avaliabilityController.getAll);
//get all softskills
router.get("/softSkills", softSkillsController.getAll);
//get all employmentStatus
router.get("/employmentStatus", employmentStatusController.getAll);
//-----------------------------------------------------------------
// // Get a role by ID
// router.get("/roles/:id", rolController.getById);
// // Get a employmentStatus by ID
// router.get("/employmentStatus/:id", remploymentStatusController.getById);

// // Update a role by ID
// router.put("/roles/:id", rolController.updateById);

// // Delete a role by ID
// router.delete("/roles/:id", rolController.deleteById);

export default router;
