import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl">Auction App</h1>
      <div>
        <Link to="/" className="mr-4">Sign In</Link>
        <Link to="/auction">Auctions</Link>
      </div>
    </nav>
  );
}
