import { useState, useEffect, useRef } from "react";
import DifficultyCard from "./DifficultyCard";
import { submitGameResults } from "@/lib/gameApi";

const DifficultySection = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("NORMAL");
  const [showGame, setShowGame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameResults, setGameResults] = useState(null);
  const iframeRef = useRef(null);

  const difficulties = ["NOOB", "EASY", "NORMAL", "HARD", "ADVANCE"];

  const handleStartGame = () => {
    const difficultyIndex = difficulties.indexOf(selectedDifficulty);

    // TODO: Get actual user data from your auth context/state
    const userData = {
      username: "Player", // Replace with actual username from auth
      country: "United States", // Replace with actual country
      countryCode: "US", // Replace with actual country code
      playerId: localStorage.getItem("playerId") || "",
    };

    // Store user data in sessionStorage for the game
    if (userData.username) {
      sessionStorage.setItem("gameUserData", JSON.stringify(userData));
    }
    sessionStorage.setItem("gameDifficulty", difficultyIndex.toString());

    setIsLoading(true);
    setShowGame(true);
    setGameResults(null);

    // Request fullscreen
    setTimeout(() => {
      const gameContainer = document.getElementById("game-container");
      if (gameContainer && document.fullscreenEnabled) {
        gameContainer.requestFullscreen().catch((err) => {
          console.log("Fullscreen request failed:", err);
        });
      }
    }, 100);
  };

  const handleCloseGame = () => {
    setShowGame(false);
    setIsLoading(false);
    setGameResults(null);
    sessionStorage.removeItem("gameUserData");
    sessionStorage.removeItem("gameDifficulty");

    // Exit fullscreen if active
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
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

    const handleFullscreenChange = () => {
      // If user exits fullscreen, close the game
      if (!document.fullscreenElement && showGame) {
        handleCloseGame();
      }
    };

    window.addEventListener("message", handleMessage);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [showGame]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <section id="difficulty" className="py-20 px-6 bg-brand-dark-1">
        <div className="container mx-auto space-y-14 max-w-4xl">
          {/* Title */}
          <div className="relative">
            <div
              className="bg-contain bg-center bg-no-repeat py-8 px-8 text-center min-h-[120px] flex items-start justify-center pt-5"
              style={{
                backgroundImage: "url('/images/choose-difficulty.svg')",
              }}
            >
              <h2
                className="text-white text-4xl font-black uppercase tracking-normal leading-relaxed"
                style={{
                  fontFamily: "Nunito, sans-serif",
                  textShadow: "0px 3.85px 0px rgba(0, 0, 0, 0.15)",
                }}
              >
                CHOOSE DIFFICULTY
              </h2>
            </div>
          </div>

          {/* Difficulty Cards */}
          <div className="grid grid-cols-5 w-full gap-6">
            {difficulties.map((difficulty) => (
              <DifficultyCard
                key={difficulty}
                difficulty={difficulty}
                isSelected={selectedDifficulty === difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
              />
            ))}
          </div>

          {/* Let's Ride Button */}
          <div className="text-center mt-20">
            <div
              className="inline-block bg-contain bg-center bg-no-repeat px-10 py-8 cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: "url('/images/lets-ride.svg')",
                minWidth: "200px",
                minHeight: "100px",
              }}
              onClick={handleStartGame}
            >
              <div className="flex items-center justify-center gap-3">
                <img src="/images/play.svg" alt="Play" className="w-10 h-10" />
                <span
                  className="text-white text-4xl font-black uppercase tracking-normal leading-relaxed"
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    textShadow: "0px 3.85px 0px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  LETS RIDE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Iframe Overlay */}
      {showGame && (
        <div id="game-container" className="fixed inset-0 z-50 bg-gray-900">
          {/* Close Button */}
          <button
            onClick={handleCloseGame}
            className="absolute top-4 right-4 z-50 bg-brand hover:bg-brand/90 cursor-pointer text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-colors"
          >
            ✕ Exit Game
          </button>

          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-40">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
                <p className="text-white text-xl font-semibold">
                  Loading Game...
                </p>
              </div>
            </div>
          )}

          {/* Game Results Overlay */}
          {gameResults && (
            <div className="absolute top-4 left-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
              <p className="font-semibold">✅ Results Saved!</p>
              <p className="text-sm">GWAM: {gameResults.gwam}</p>
            </div>
          )}

          {/* Game Iframe */}
          <iframe
            ref={iframeRef}
            src={`/game/index.html?difficulty=${difficulties.indexOf(
              selectedDifficulty
            )}`}
            title="Rally Typer Game"
            className="w-full h-full border-0"
            onLoad={handleIframeLoad}
            allow="fullscreen"
          />
        </div>
      )}
    </>
  );
};

export default DifficultySection;
