// Routes for marketplace listing operations
import express from "express";
import {
  createListing,
  getListings,
  getAllListings,
  updateListing,
  deleteListing,
} from "../controllers/listingController.js";
const listingRouter = express.Router();

// Create a new marketplace listing
listingRouter.post("/create-listing", createListing);
// Get all listings for a specific user
listingRouter.get("/get-listings", getListings);
// Get all listings in the marketplace
listingRouter.get("/get-all-listings", getAllListings);
// Update an existing listing
listingRouter.put("/edit-listing", updateListing);
// Delete a listing from the marketplace
listingRouter.delete("/delete-listing", deleteListing);

export default listingRouter;
