import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
  _name: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  professors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  universityListings: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
  ],
});

export default mongoose.model("University", UniversitySchema);
