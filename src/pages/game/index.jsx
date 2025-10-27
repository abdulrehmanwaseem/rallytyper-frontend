import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GamePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = location.state?.difficulty || 2; // Default to NORMAL (index 2)
  const [gameLoaded, setGameLoaded] = useState(false);

  useEffect(() => {
    // Get user data from localStorage (set during registration/login)
    const userData = {
      username: localStorage.getItem("username") || "Guest",
      fullName: localStorage.getItem("fullName") || "",
      country: localStorage.getItem("country") || "",
      countryCode: localStorage.getItem("countryCode") || "",
      avatar: localStorage.getItem("avatar") || "",
      playerId: localStorage.getItem("playerId") || "",
    };

    // Store user data in sessionStorage for the game to access
    sessionStorage.setItem("gameUserData", JSON.stringify(userData));
    sessionStorage.setItem("gameDifficulty", difficulty.toString());

    // Listen for game results from the game window
    const handleGameResults = (event) => {
      // Only accept messages from same origin
      if (event.origin !== window.location.origin) return;

      if (event.data.type === "GAME_RESULTS") {
        const results = event.data.payload;
        console.log("🎮 Game Results Received:", results);
        console.log("📊 Performance Stats:", {
          time: results.time + "s",
          accuracy: results.accuracy + "%",
          gwam: results.gwam,
          personalBest: results.personalBest,
          place: results.place,
          difficulty: results.difficulty,
        });
        console.log("👤 Player Info:", {
          username: results.username,
          country: results.country,
        });

        // Optional: Navigate back to home or show results page
        // navigate("/", { state: { gameResults: results } });
      }

      if (event.data.type === "GAME_QUIT") {
        console.log("🚪 Player quit the game");
        navigate("/");
      }
    };

    window.addEventListener("message", handleGameResults);

    // Redirect to the game HTML page with difficulty parameter
    if (!gameLoaded) {
      window.location.href = `/game/index.html?difficulty=${difficulty}`;
      setGameLoaded(true);
    }

    return () => {
      window.removeEventListener("message", handleGameResults);
    };
  }, [difficulty, gameLoaded, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-white text-2xl">Loading game...</div>
    </div>
  );
};

export default GamePage;
