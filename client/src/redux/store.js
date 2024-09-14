import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameReducer";
import leaderboardReducer from "./reducers/leaderboardReducer";

const store = configureStore({
  reducer: {
    game: gameReducer,
    leaderboard: leaderboardReducer,
  },
});

export default store;
