import express from "express";
import rolController from "../controllers/rolController.js"; // Make sure to provide the correct path to the controller

const router = express.Router();

// Get all roles
router.get("/roles", rolController.getAll);

// Get a role by ID
router.get("/roles/:id", rolController.getById);

// Update a role by ID
router.put("/roles/:id", rolController.updateById);

// Delete a role by ID
router.delete("/roles/:id", rolController.deleteById);

export default router;
