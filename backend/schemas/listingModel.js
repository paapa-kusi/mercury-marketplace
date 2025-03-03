import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  _listingUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  universitySpecific: { type: Boolean, default: false, required: true },
  university: { type: mongoose.Schema.Types.ObjectId, ref: "University" },
  localPickup: { type: Boolean, default: false, required: true },
  localPickupLocation: { type: String },
});

export default mongoose.model("Listing", ListingSchema);
