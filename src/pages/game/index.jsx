import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GamePage = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || 2; // Default to NORMAL (index 2)

  useEffect(() => {
    // Redirect to the game HTML page with difficulty parameter
    window.location.href = `/game/index.html?difficulty=${difficulty}`;
  }, [difficulty]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-white text-2xl">Loading game...</div>
    </div>
  );
};

export default GamePage;
