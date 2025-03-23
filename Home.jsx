import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1 className="hero-title">🚀 Welcome to <span>Auction Hub</span></h1>
        <p className="hero-subtitle">Discover and bid on unique items from around the world.</p>
        <div className="hero-buttons">
          <Link to="/auction" className="btn primary">Explore Auctions</Link>
          <Link to="/auth" className="btn secondary">Sign In</Link>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h2>📦 Rare Collectibles</h2>
          <p>Bid on exclusive antiques and valuable items.</p>
        </div>
        <div className="feature">
          <h2>🔒 Secure Transactions</h2>
          <p>Enjoy seamless and secure payments with trusted escrow.</p>
        </div>
        <div className="feature">
          <h2>⚡ Real-Time Bidding</h2>
          <p>Experience fast-paced bidding with live updates.</p>
        </div>
      </section>
    </div>
  );
}
