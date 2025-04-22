// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import listingRouter from "./routes/listingRoutes.js";
import universityRouter from "./routes/universityRoutes.js";

dotenv.config();

// express app
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);
app.use("/api/university", universityRouter);

// mongo connection
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = 5001;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
    process.exit(1);
  });
