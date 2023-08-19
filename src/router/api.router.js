import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.send("te equivocaste de ruta")); // Cambio aquí
router.get("/roles", (req, res) => res.send("roles")); // Cambio aquí

export default router;
