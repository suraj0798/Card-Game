import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "./components/Game"; // Import Game component
import Leaderboard from "./components/Leaderboard"; // Import Leaderboard component
import { setUser } from "./redux/actions/gameActions"; // Action to set username
// import "./App.css"; // Optional if you want to add any custom styles

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.game.user); // Get user from Redux state
  const [username, setUsername] = useState(""); // Local state for the username input

  // Handle setting the username
  const handleSetUser = () => {
    if (username.trim()) {
      dispatch(setUser(username));
    } else {
      alert("Please enter a valid username.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Card Game!</h1>
          <p className="mb-4">Enter your username to start playing:</p>
          <input
            type="text"
            className="border rounded-md p-2 mb-4 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <button
            onClick={handleSetUser}
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
          >
            Start Game
          </button>
        </div>
      
        <>
          <h1 className="text-3xl font-bold mb-6">
            Hello, {user}! Ready to play?
          </h1>
          <Game />
          <Leaderboard />
        </>
    </div>
  );
}

export default App;
