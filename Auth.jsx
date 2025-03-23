import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate("/auction"); // Redirect to Auction Page
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 w-full" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
