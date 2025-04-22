// Routes for user management and authentication
import express from "express";
import {
  signupUser,
  completeProfile,
  getProfile,
  getAllUniversities,
  getUser,
  updateUniversity,
} from "../controllers/userController.js";
import clerkWebhook from "../controllers/webhookController.js";

const userRouter = express.Router();

// Create a new user account
userRouter.post("/signup", signupUser);
// Complete user profile with role and university
userRouter.post("/complete-profile", completeProfile);
// Get user profile information
userRouter.get("/get-profile", getProfile);
// Get user information by Clerk ID
userRouter.get("/get-user", getUser);
// Get list of available universities
userRouter.get("/universities", getAllUniversities);
// Handle Clerk webhook events
userRouter.post("/webhook", clerkWebhook);
// Update user's associated university
userRouter.post("/update-university", updateUniversity);

export default userRouter;
