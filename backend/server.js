// imports
import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import userRouter from "./routes/userRoutes.js";
import listingRouter from "./routes/listingRoutes.js";

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

// schema (rami)

// login route
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     // check if user exists
//     const user = await User.findOne({ username });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: "Invalid username or password" });
//     }
//     const token = jwt.sign({ username }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.json({ username: user.username, token });
//   } catch (err) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
