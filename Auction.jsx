import React, { useState } from "react";
import "./Auction.css";

const auctionItems = [
  { id: 1, name: "Vintage Watch", currentBid: 120 },
  { id: 2, name: "Rare Painting", currentBid: 450 },
  { id: 3, name: "Antique Vase", currentBid: 300 },
];

export default function Auction() {
  const [bids, setBids] = useState(auctionItems);

  const placeBid = (id) => {
    setBids((prevBids) =>
      prevBids.map((item) =>
        item.id === id ? { ...item, currentBid: item.currentBid + 10 } : item
      )
    );
  };

  return (
    <div className="auction-container">
      <h2 className="auction-title">Live Auctions</h2>
      <div className="auction-grid">
        {bids.map((item) => (
          <div key={item.id} className="auction-item">
            <h3>{item.name}</h3>
            <p>Current Bid: ${item.currentBid}</p>
            <button onClick={() => placeBid(item.id)}>Place Bid +$10</button>
          </div>
        ))}
      </div>
    </div>
  );
}
