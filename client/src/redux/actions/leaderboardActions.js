// Action Types
export const UPDATE_LEADERBOARD = "UPDATE_LEADERBOARD";
export const FETCH_LEADERBOARD = "FETCH_LEADERBOARD";

// Action Creators

// Update the leaderboard with a new user's wins
export const updateLeaderboard = (user, wins) => {
  return async (dispatch) => {
    try {
      // Simulate an API call to update the leaderboard
      const response = await fetch("/api/updateLeaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, wins }),
      });

      if (!response.ok) {
        throw new Error("Failed to update leaderboard");
      }

      // Dispatch action to update local leaderboard state
      dispatch({
        type: UPDATE_LEADERBOARD,
      });
    } catch (error) {
      console.error("Error updating leaderboard:", error);
    }
  };
};

// Fetch the leaderboard from the server
export const fetchLeaderboard = () => {
  return async (dispatch) => {
    try {
      // Simulate an API call to fetch the leaderboard
      const response = await fetch("/api/getLeaderboard");
      const leaderboard = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch leaderboard");
      }

      // Dispatch action to set the leaderboard state
      dispatch({
        type: FETCH_LEADERBOARD,
        payload: leaderboard,
      });
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };
};
