// Routes for university management operations
import express from "express";
import {
  getUniversity,
  getAllUniversities,
  createUniversity,
} from "../controllers/universityController.js";
const universityRouter = express.Router();

// Get a specific university by ID
universityRouter.get("/get-university", getUniversity);
// Get all universities in the system
universityRouter.get("/get-all-universities", getAllUniversities);
// Create a new university
universityRouter.post("/create-university", createUniversity);

export default universityRouter;
