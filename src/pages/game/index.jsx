import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { submitGameResults } from "@/lib/gameApi";

const GamePage = () => {
  const location = useLocation();
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [gameResults, setGameResults] = useState(null);

  const difficulty = location.state?.difficulty || 2;

  useEffect(() => {
    const userData = location.state?.userData || {};

    if (userData.username) {
      sessionStorage.setItem("gameUserData", JSON.stringify(userData));
    }
    sessionStorage.setItem("gameDifficulty", difficulty.toString());

    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;

      if (event.data?.type === "GAME_RESULTS") {
        console.log("🎮 Game Results Received:", event.data.payload);
        setGameResults(event.data.payload);

        // Submit results to backend
        submitGameResults(event.data.payload)
          .then((response) => {
            console.log("✅ Results saved to backend:", response);
          })
          .catch((error) => {
            console.error("❌ Failed to save results:", error);
          });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      sessionStorage.removeItem("gameUserData");
      sessionStorage.removeItem("gameDifficulty");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white text-xl font-semibold">Loading Game...</p>
          </div>
        </div>
      )}

      {gameResults && (
        <div className="absolute top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-20">
          <p className="font-semibold">Results Saved!</p>
          <p className="text-sm">GWAM: {gameResults.gwam}</p>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={`/game/index.html?difficulty=${difficulty}`}
        title="Rally Typer Game"
        className="w-full h-full border-0"
        onLoad={handleIframeLoad}
        allow="fullscreen"
      />
    </div>
  );
};

export default GamePage;
