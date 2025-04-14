import express from "express";
import {signupUser, completeProfile, getProfile, getAllUniversities} from "../controllers/userController.js";
import clerkWebhook from "../controllers/webhookController.js";

const userRouter = express.Router();

userRouter.post("/signup", signupUser);
userRouter.post("/complete-profile", completeProfile);
userRouter.get("/get-profile", getProfile);
userRouter.get("/universities", getAllUniversities);
userRouter.post("/webhook", clerkWebhook);

export default userRouter;
