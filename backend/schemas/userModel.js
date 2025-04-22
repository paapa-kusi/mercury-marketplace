import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: false },
  clerkId: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: {
    type: String,
    enum: ["Student", "Professor"],
    default: "Student",
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    default: null,
  },
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
});

export default mongoose.model("User", UserSchema);
