import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card"; // Import the Card component
import { drawCard, shuffleDeck, resetGame } from "../redux/actions/gameActions"; // Redux actions to manage deck

const Deck = () => {
  const dispatch = useDispatch();
  const { deck, drawnCards, isGameOver, isShuffled, defuseAvailable } =
    useSelector((state) => state.game); // Select state from Redux
  const [currentCard, setCurrentCard] = useState(null);

  // Handle card drawing
  const handleDrawCard = () => {
    if (!isGameOver && deck.length > 0) {
      const card = deck[0]; // Take the top card from the deck
      setCurrentCard(card);
      dispatch(drawCard(card)); // Dispatch action to update Redux state
    }
  };

  // Handle shuffle action
  const handleShuffleDeck = () => {
    if (!isGameOver) {
      dispatch(shuffleDeck()); // Dispatch action to shuffle the deck
    }
  };

  // Reset the game when shuffle happens or game is over
  useEffect(() => {
    if (isShuffled || isGameOver) {
      setCurrentCard(null); // Clear the current card on shuffle or game over
    }
  }, [isShuffled, isGameOver]);

  return (
    <div className="deck-container flex flex-col items-center">
      {isGameOver ? (
        <div className="text-3xl text-red-500 font-bold">
          {deck.length === 0 ? "You Win!" : "Game Over!"}
        </div>
      ) : (
        <>
          {currentCard && (
            <div className="current-card mb-4">
              <Card card={currentCard} /> {/* Render the current card */}
            </div>
          )}
          <button
            onClick={handleDrawCard}
            className="btn-draw bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            disabled={deck.length === 0}
          >
            Draw Card
          </button>
          {defuseAvailable && (
            <p className="mt-2 text-green-500">Defuse Card Available</p>
          )}
          {deck.length > 0 && (
            <button
              onClick={handleShuffleDeck}
              className="btn-shuffle bg-yellow-500 text-white p-3 mt-4 rounded-lg hover:bg-yellow-600"
            >
              Shuffle Deck
            </button>
          )}
        </>
      )}
      {deck.length === 0 && !isGameOver && (
        <button
          onClick={() => dispatch(resetGame())}
          className="btn-reset bg-green-500 text-white p-3 mt-4 rounded-lg hover:bg-green-600"
        >
          Reset Game
        </button>
      )}
    </div>
  );
};

export default Deck;
