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
import userProfileController from "../controllers/userProfileController.js";
import englishController from "../controllers/english.controller.js";
import insitutionsController from "../controllers/institutionsController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bienvenido a la API");
});

//get routes

router.get("/insitutions", insitutionsController.getAll);
router.get("/english", englishController.getAll);
router.get("/roles", rolController.getAll);
router.get("/countries", countryController.getAll);
router.get("/visas", visaController.getAll);
router.get("/avaliabilities", avaliabilityController.getAll);
router.get("/softSkills", softSkillController.getAll);
router.get("/employmentStatus", employmentStatusController.getAll);
router.get("/typeSkills", typeSkillController.getAll);
router.get("/skills", skillController.getAll);
router.get("/levels", levelController.getAll);
router.get("/user/profile", userController.getUser);
router.get("/userProfile", userProfileController.getUserProfile);
router.get("/countries/:countryIso/states", stateController.getById);
router.get(
  "/countries/:countryIso/states/:stateIso/cities",
  cityController.getCitiesByStateAndCountry
);

//-----------------------------------------------------------------
//POST

router.post("/companies", companyController.createCompany);
router.post("/user", userController.createUser);
router.post("/recoverPassword", userController.recoverPassword);
router.post("/login", userController.login);
router.post("/profile", userProfileController.createUserProfile);
export default router;