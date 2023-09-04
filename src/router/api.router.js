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
import authenticate from "../middleware/authMiddleware.js";
import userProfileController from "../controllers/userProfileController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bienvenido a la API");
});

//get routes

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
//get loged user profile
router.get("/user/profile", authenticate, userController.getUser);
router.get("/userProfile", authenticate, userProfileController.getUserProfile);

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
router.post("/login", userController.login);
router.post("/profile", authenticate, userProfileController.createUserProfile);
export default router;
