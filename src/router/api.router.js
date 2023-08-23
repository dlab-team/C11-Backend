import express from "express";
import rolController from "../controllers/rolController.js"; // Make sure to provide the correct path to the controller
import countryController from "../controllers/countryController.js";
import visaController from "../controllers/visaController.js";
import avaliabilityController from "../controllers/availabilityController.js";
import softSkillController from "../controllers/softSkillsController.js";
import employmentStatusController from "../controllers/employmentStatusController.js";
import typeSkillController from "../controllers/typeSkillController.js";
import skillController from "../controllers/skillController.js";
import levelController from "../controllers/levelController.js";
import companyController from "../controllers/companyController.js";

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
router.get("/softSkills", softSkillController.getAll);
//get all employmentStatus
router.get("/employmentStatus", employmentStatusController.getAll);
//get all typeSkills
router.get("/typeSkills", typeSkillController.getAll);
//get all skills with typeskills
router.get("/skills", skillController.getAll);
//get all levels
router.get("/levels", levelController.getAll);
//get all companies
router.get("/companies", companyController.getAll);

//-----------------------------------------------------------------
// // Get a role by ID
// router.get("/roles/:id", rolController.getById);
// // Get a employmentStatus by ID
// router.get("/employmentStatus/:id", remploymentStatusController.getById);

// // Update a role by ID
// router.put("/roles/:id", rolController.updateById);

// // Delete a role by ID
// router.delete("/roles/:id", rolController.deleteById);

//-----------------------------------------------------------------

//create routes
router.post("/companies", companyController.createCompany);

export default router;
