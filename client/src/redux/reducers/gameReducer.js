const initialState = {
  deck: [],
  user: null,
  gameStarted: false,
  gameWon: false,
  gameLost: false,
  points: 0,
  leaderboard: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_GAME":
      return { ...state, gameStarted: true, deck: action.payload.deck };
    case "DRAW_CARD":
      return { ...state, deck: state.deck.slice(1) }; // Remove drawn card
    case "GAME_WON":
      return { ...state, gameWon: true };
    case "GAME_LOST":
      return { ...state, gameLost: true };
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "UPDATE_LEADERBOARD":
      return { ...state, leaderboard: action.payload.leaderboard };
    default:
      return state;
  }
};

export default gameReducer;
