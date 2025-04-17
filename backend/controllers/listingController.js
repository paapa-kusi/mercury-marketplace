import Listing from "../schemas/listingModel.js";

const createListing = async (req, res) => {
  const { clerkId, image, title, description, price, category, date, status } =
    req.body;
  console.log(req.body);
  try {
    const listing = await Listing.create({
      clerkId,
      image,
      title,
      description,
      price,
      category,
      date,
      status,
    });
    listing
      ? res.status(200).json(listing)
      : res.status(500).json({ message: "Listing could not be created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getListings = async (req, res) => {
  const { clerkId } = req.query;
  try {
    const listings = await Listing.find({ clerkId });

    listings
      ? res.status(200).json(listings)
      : res.status(500).json({ message: "Listings could not be found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find({});
    listings
      ? res.status(200).json(listings)
      : res.status(500).json({ message: "Listings could not be found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { createListing, getListings, getAllListings };
