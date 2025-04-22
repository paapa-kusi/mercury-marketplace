"use client";

import { useState, useEffect } from "react";
import {useSearchParams} from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const [listing, setListing] = useState(null);

  const itemId = searchParams.get('itemid');

  useEffect(() => {
    const fetchListing = async () => {
      const res = await fetch(`/api/listing/${itemId}`);
      const data = await res.json();
      setListing(data);
    };
    if (itemId) fetchListing();
  }, [itemId]);

  const handlePayment = async () => {
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        listingId: itemId,
        price: listing.price,
        name: listing.title,
      }),
    });
    const { url } = await response.json();
    window.location.href = url;
  };

  if (!listing) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Checkout: {listing.title}</h1>
      <p>Price: ${listing.price}</p>
      <button onClick={handlePayment} className="bg-blue-600 text-white p-2 rounded">
        Proceed to Pay with Stripe
      </button>
    </div>
  );
}
