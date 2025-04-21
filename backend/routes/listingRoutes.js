import express from "express";
import {
  createListing,
  getListings,
  getAllListings,
  updateListing,
  deleteListing,
} from "../controllers/listingController.js";
const listingRouter = express.Router();

listingRouter.post("/create-listing", createListing);
listingRouter.get("/get-listings", getListings);
listingRouter.get("/get-all-listings", getAllListings);
listingRouter.put("/edit-listing", updateListing);
listingRouter.delete("/delete-listing", deleteListing);

export default listingRouter;
