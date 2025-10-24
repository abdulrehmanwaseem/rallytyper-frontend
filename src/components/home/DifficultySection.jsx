import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DifficultyCard from "./DifficultyCard";

const DifficultySection = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("NORMAL");
  const navigate = useNavigate();

  const difficulties = ["NOOB", "EASY", "NORMAL", "HARD", "ADVANCE"];

  const handleStartGame = () => {
    const difficultyIndex = difficulties.indexOf(selectedDifficulty);
    navigate("/game", { state: { difficulty: difficultyIndex } });
  };

  return (
    <section id="difficulty" className="py-20 px-6 bg-brand-dark-1">
      <div className="container mx-auto space-y-14 max-w-4xl">
        {/* Title */}
        <div className="relative">
          <div
            className="bg-contain bg-center bg-no-repeat py-8 px-8 text-center min-h-[120px] flex items-start justify-center pt-5"
            style={{ backgroundImage: "url('/images/choose-difficulty.svg')" }}
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
  );
};

export default DifficultySection;
