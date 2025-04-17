import express from "express";
import {
  getUniversity,
  getAllUniversities,
  createUniversity,
} from "../controllers/universityController.js";
const universityRouter = express.Router();

universityRouter.get("/get-university", getUniversity);
universityRouter.get("/get-all-universities", getAllUniversities);
universityRouter.post("/create-university", createUniversity);

export default universityRouter;
