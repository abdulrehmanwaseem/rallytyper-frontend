// API service for game-related endpoints

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Submit game results to the backend leaderboard
 * @param {Object} gameResults - The game results object from the game
 * @returns {Promise} API response
 */
export const submitGameResults = async (gameResults) => {
  try {
    const response = await fetch(`${API_BASE_URL}/leaderboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add auth token if needed
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(gameResults),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit results: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("✅ Results submitted successfully:", data);
    return data;
  } catch (error) {
    console.error("❌ Error submitting game results:", error);
    throw error;
  }
};

/**
 * Get leaderboard data
 * @param {string} difficulty - The difficulty level (noob, easy, normal, hard, advanced)
 * @param {number} limit - Number of top players to fetch
 * @returns {Promise} Leaderboard data
 */
export const getLeaderboard = async (difficulty = "all", limit = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/leaderboard?difficulty=${difficulty}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch leaderboard: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error fetching leaderboard:", error);
    throw error;
  }
};

/**
 * Get player stats
 * @param {string} playerId - The player ID
 * @returns {Promise} Player stats
 */
export const getPlayerStats = async (playerId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/player/${playerId}/stats`);

    if (!response.ok) {
      throw new Error(`Failed to fetch player stats: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error fetching player stats:", error);
    throw error;
  }
};
