import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  clerkId: { type: String, required: true },
  image: { type: String, required: true }, // hosted in cloudinary
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["Course Materials", "Electronics", "Dorm Supplies", "Miscellaneous"],
    default: "Course Materials",
  },
  status: {
    type: String,
    enum: ["Active", "Sold", "Inactive"],
    default: "Active",
  },
  date: { type: Date, default: Date.now },
  universitySpecific: { type: Boolean, default: false, required: false },
  university: { type: mongoose.Schema.Types.ObjectId, ref: "University" },
  localPickup: { type: Boolean, default: false, required: false },
  localPickupLocation: { type: String },
});

export default mongoose.model("Listing", ListingSchema);
