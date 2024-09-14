import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Deck from "./Deck"; // Import the Deck component
import { resetGame, saveGameProgress } from "../redux/actions/gameActions"; // Import actions
import { updateLeaderboard } from "../redux/actions/leaderboardActions"; // Leaderboard action

const Game = () => {
  const dispatch = useDispatch();
  const { isGameOver, user, deck, wins } = useSelector((state) => state.game); // Select relevant game state
  const leaderboard = useSelector((state) => state.leaderboard); // Get leaderboard state

  // Automatically save the game progress after each change in the deck or game status
  useEffect(() => {
    if (user) {
      dispatch(saveGameProgress(user, deck, isGameOver)); // Save progress for the user
    }
  }, [deck, isGameOver, user, dispatch]);

  // Update the leaderboard when the game is won
  useEffect(() => {
    if (isGameOver && deck.length === 0) {
      dispatch(updateLeaderboard(user, wins)); // Update leaderboard when a game is won
    }
  }, [isGameOver, deck, user, wins, dispatch]);

  return (
    <div className="game-container flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Card Game</h2>
      {!isGameOver ? (
        <div>
          <Deck /> {/* Render Deck component */}
        </div>
      ) : (
        <div className="mt-4">
          <h2 className="text-2xl text-red-500 font-bold">
            {deck.length === 0
              ? "Congratulations! You won the game!"
              : "Game Over!"}
          </h2>
          <button
            onClick={() => dispatch(resetGame())}
            className="bg-green-500 text-white p-3 mt-4 rounded-lg hover:bg-green-600"
          >
            Play Again
          </button>
        </div>
      )}
      <div className="leaderboard mt-8">
        <h3 className="text-xl font-semibold mb-4">Leaderboard</h3>
        <ul>
          {leaderboard.map((player, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              <span>{player.username}</span>
              <span>{player.wins} Wins</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
