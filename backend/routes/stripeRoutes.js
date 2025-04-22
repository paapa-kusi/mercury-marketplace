import express from "express";
import Stripe from "stripe";
import Listing from "../schemas/listingModel.js";
import dotenv from "dotenv";
import * as http from "node:http";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
    const { cartItems } = req.body;
    try {
        const lineItems = [];

        for (const item of cartItems) {
            const listing = await Listing.findById(item.id);
            if (!listing) continue;

            lineItems.push({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: listing.title,
                        description: listing.description,
                        images: [listing.imageUrl],
                    },
                    unit_amount: listing.price * 100, // Convert to cents
                },
                quantity: item.quantity,
            });
        }
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

);

export default router;
