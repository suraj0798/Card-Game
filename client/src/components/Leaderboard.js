import React from "react";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  // Get leaderboard data from Redux store
  const leaderboard = useSelector((state) => state.leaderboard);

  return (
    <div className="leaderboard-container bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Leaderboard</h3>
      <ul className="leaderboard-list">
        {leaderboard.length === 0 ? (
          <li className="text-gray-500">No players on the leaderboard yet.</li>
        ) : (
          leaderboard.map((player, index) => (
            <li
              key={index}
              className="flex justify-between p-3 border-b border-gray-200"
            >
              <span className="font-medium">{player.username}</span>
              <span className="font-medium">{player.wins} Wins</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Leaderboard;
