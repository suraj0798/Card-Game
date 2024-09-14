// Action Types
export const DRAW_CARD = "DRAW_CARD";
export const SHUFFLE_DECK = "SHUFFLE_DECK";
export const RESET_GAME = "RESET_GAME";
export const SAVE_GAME_PROGRESS = "SAVE_GAME_PROGRESS";
export const SET_USER = "SET_USER";

// Action Creators

// Set the current user's information
export const setUser = (username) => {
  return {
    type: SET_USER,
    payload: username,
  };
};


// Draw a card from the deck
export const drawCard = (card) => {
  return (dispatch, getState) => {
    const { deck, drawnCards, defuseAvailable } = getState().game;

    // Handle card effects
    if (card === "💣") {
      dispatch({
        type: RESET_GAME,
      });
      return;
    }

    // Add drawn card to the list of drawn cards
    const updatedDrawnCards = [...drawnCards, card];
    const updatedDeck = deck.slice(1); // Remove the top card from the deck

    // Update the state based on card type
    if (card === "🙅‍♂️") {
      // Defuse card logic
      dispatch({
        type: DRAW_CARD,
        payload: {
          card,
          deck: updatedDeck,
          drawnCards: updatedDrawnCards,
          defuseAvailable: true,
        },
      });
    } else if (card === "🔀") {
      // Shuffle card logic
      dispatch({
        type: SHUFFLE_DECK,
      });
    } else {
      // Cat card logic
      dispatch({
        type: DRAW_CARD,
        payload: {
          card,
          deck: updatedDeck,
          drawnCards: updatedDrawnCards,
          defuseAvailable,
        },
      });
    }
  };
};

// Shuffle the deck
export const shuffleDeck = () => {
  return (dispatch, getState) => {
    const { drawnCards } = getState().game;

    // Shuffle logic, could be more complex in a real app
    const shuffledDeck = shuffleArray(generateDeck()); // Replace with actual shuffle logic

    dispatch({
      type: SHUFFLE_DECK,
      payload: { deck: shuffledDeck, drawnCards: [], defuseAvailable: false },
    });
  };
};

// Reset the game
export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};

// Save game progress (simulate async saving)
export const saveGameProgress = (user, deck, isGameOver) => {
  return async (dispatch) => {
    try {
      // Simulate an API call to save game progress
      await fetch("/api/saveGameProgress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, deck, isGameOver }),
      });
      // Dispatch success action if needed
    } catch (error) {
      console.error("Failed to save game progress:", error);
    }
  };
};

// Utility function to shuffle an array
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Utility function to generate a new deck of cards
const generateDeck = () => {
  // Example deck generation, replace with actual deck creation logic
  return ["😼", "🙅‍♂️", "🔀", "💣", "😼"];
};
