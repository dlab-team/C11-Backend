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
import stateController from "../controllers/stateController.js";
import cityController from "../controllers/cityController.js";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bienvenido a la API");
});

//get routes
// Get listas
router.get("/roles", rolController.getAll);
router.get("/countries", countryController.getAll);
router.get("/visas", visaController.getAll);
router.get("/typeSkills", typeSkillController.getAll);
router.get("/skills", skillController.getAll);
router.get("/avaliabilities", avaliabilityController.getAll);
router.get("/softSkills", softSkillController.getAll);
router.get("/employmentStatus", employmentStatusController.getAll);
router.get("/levels", levelController.getAll);

//-----------------------------------------------------------------
//find by id

//the next 2 methods return a json with the value of the id as iso2 to make easier to implement in the frontend
//find states by country iso2
router.get("/countries/:countryIso/states", stateController.getById);
//find cities by state iso2  and country iso2
router.get(
  "/countries/:countryIso/states/:stateIso/cities",
  cityController.getCitiesByStateAndCountry
);

//-----------------------------------------------------------------
//crate companies
router.post("/companies", companyController.createCompany);
router.post("/user", userController.createUser);
router.post("/recoverPassword", userController.recoverPassword);
export default router;
