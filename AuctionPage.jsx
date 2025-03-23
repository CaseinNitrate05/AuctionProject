import React, { useState } from "react";
import "./AuctionPage.css";

const auctionItems = [
  { id: 1, name: "Vintage Watch", currentBid: 120 },
  { id: 2, name: "Rare Painting", currentBid: 450 },
  { id: 3, name: "Antique Vase", currentBid: 300 },
];

export default function AuctionPage() {
  const [bids, setBids] = useState(auctionItems);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const placeBid = (id) => {
    setBids((prevBids) =>
      prevBids.map((item) =>
        item.id === id ? { ...item, currentBid: item.currentBid + 10 } : item
      )
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  return (
    <div className="container">
      {!isAuthenticated ? (
        <div className="auth-box">
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      ) : (
        <div className="auction-container">
          <h1>Auction Items</h1>
          <div className="auction-grid">
            {bids.map((item) => (
              <div key={item.id} className="auction-item">
                <h2>{item.name}</h2>
                <p>Current Bid: ${item.currentBid}</p>
                <button onClick={() => placeBid(item.id)}>Place Bid +$10</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
