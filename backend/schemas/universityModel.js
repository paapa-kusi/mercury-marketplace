// Schema for universities with references to users and listings
import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
  // Unique name of the university
  _name: { type: String, required: true, unique: true },
  // Physical location of the university
  location: { type: String, required: true },
  // Description of the university
  description: { type: String, required: true },
  // Array of student references
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  // Array of professor references
  professors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  // University logo URL
  logo: { type: String, required: true },
  // Array of university-specific listing references
  universityListings: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
  ],
});

export default mongoose.model("University", UniversitySchema);
