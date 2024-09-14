import {
  UPDATE_LEADERBOARD,
  FETCH_LEADERBOARD,
} from "../actions/leaderboardActions";

// Initial state of the leaderboard
const initialState = [];

// Reducer function to handle leaderboard actions
const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEADERBOARD:
      // Update the state with the fetched leaderboard data
      return action.payload || [];

    case UPDATE_LEADERBOARD:
      // Placeholder logic for updating leaderboard; it might need to fetch new data or update locally
      return [...state]; // This would need to be more specific in a real application

    default:
      return state;
  }
};

export default leaderboardReducer;
