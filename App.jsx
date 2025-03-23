import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Auction from "./components/Auction";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auction" element={<Auction />} />
      </Routes>
    </div>
  );
}

export default App;
