// Schema for users with role-based access and university association
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // User's email address
  email: { type: String, required: true },
  // Optional username
  username: { type: String, required: false },
  // Clerk authentication ID
  clerkId: { type: String },
  // User's first name
  firstName: { type: String, required: true },
  // User's last name
  lastName: { type: String, required: true },
  // User role with predefined options
  role: {
    type: String,
    enum: ["Student", "Professor"],
    default: "Student",
  },
  // Reference to associated university
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    default: null,
  },
  // Array of user's marketplace listings
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
});

export default mongoose.model("User", UserSchema);
