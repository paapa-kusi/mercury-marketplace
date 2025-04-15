import express from "express";
import {
  createListing,
  getListings,
  getAllListings,
} from "../controllers/listingController.js";
const listingRouter = express.Router();

listingRouter.post("/create-listing", createListing);
listingRouter.post("/get-listings", getListings);
listingRouter.get("/get-all-listings", getAllListings);

export default listingRouter;
