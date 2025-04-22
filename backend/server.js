// Main server file for the Mercury Marketplace backend
// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import listingRouter from "./routes/listingRoutes.js";
import universityRouter from "./routes/universityRoutes.js";
import stripeRouter from "./routes/stripeRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Configure CORS for cross-origin requests
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Enable JSON parsing for request bodies
app.use(express.json());

// Register API routes
app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);
app.use("/api/university", universityRouter);
app.use("/api/stripe", stripeRouter);

// Connect to MongoDB database
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start server on port 5001
    const PORT = 5001;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
    process.exit(1);
  });
