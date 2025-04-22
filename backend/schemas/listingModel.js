// Schema for marketplace listings with required fields and validations
import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  // User ID from Clerk authentication
  clerkId: { type: String, required: true },
  // Image URL stored in cloudinary
  image: { type: String, required: true },
  // Title of the listing
  title: { type: String, required: true },
  // Detailed description of the item
  description: { type: String, required: true },
  // Price of the item
  price: { type: Number, required: true },
  // Category of the item with predefined options
  category: {
    type: String,
    enum: ["Course Materials", "Electronics", "Dorm Supplies", "Miscellaneous"],
    default: "Course Materials",
  },
  // Current status of the listing
  status: {
    type: String,
    enum: ["Active", "Sold", "Inactive"],
    default: "Active",
  },
  // Creation date of the listing
  date: { type: Date, default: Date.now },
  // Reference to the university if listing is university-specific
  universitySpecific: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
  },
});

export default mongoose.model("Listing", ListingSchema);
