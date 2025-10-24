import React, { useState } from "react";
import DifficultyCard from "./DifficultyCard";
import { Trophy } from "lucide-react";

const LeaderboardSection = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("NORMAL");

  const difficulties = ["NOOB", "EASY", "NORMAL", "HARD", "ADVANCE"];

  const topThree = [
    {
      name: "Player 80,000",
      position: 2,
      avatar: "https://i.pravatar.cc/150?img=12",
      placement: "left-[11%]",
      size: "w-28 h-28",
      textSize: "text-xl",
      topOffset: "top-4",
      trophyColor: "#C0C0C0", // Silver
      trophySize: 32,
    },
    {
      name: "Player 100,000",
      position: 1,
      avatar: "https://i.pravatar.cc/150?img=13",
      placement: "left-1/2 transform -translate-x-1/2",
      size: "w-40 h-40",
      textSize: "text-2xl",
      topOffset: "-top-2",
      borderColor: "border-brand-gold",
      nameColor: "text-brand-gold",
      trophyColor: "#FFD700", // Gold
      trophySize: 48,
    },
    {
      name: "Player 70,000",
      position: 3,
      avatar: "https://i.pravatar.cc/150?img=14",
      placement: "right-[11%]",
      size: "w-28 h-28",
      textSize: "text-xl",
      topOffset: "top-4",
      trophyColor: "#CD7F32", // Bronze
      trophySize: 32,
    },
  ];

  const leaderboardData = [
    {
      position: 1,
      name: "USMAN",
      flag: "us",
      avatar: "https://i.pravatar.cc/150?img=1",
      accuracy: "98%",
      wpm: "89 WPM",
    },
    {
      position: 2,
      name: "AAYAN",
      flag: "cn",
      avatar: "https://i.pravatar.cc/150?img=2",
      accuracy: "97%",
      wpm: "84 WPM",
    },
    {
      position: 3,
      name: "DAN",
      flag: "pk",
      avatar: "https://i.pravatar.cc/150?img=3",
      accuracy: "96%",
      wpm: "86 WPM",
    },
    {
      position: 4,
      name: "TRUMP",
      flag: "ar",
      avatar: "https://i.pravatar.cc/150?img=4",
      accuracy: "95%",
      wpm: "85 WPM",
    },
    {
      position: 5,
      name: "FENOCO",
      flag: "ie",
      avatar: "https://i.pravatar.cc/150?img=5",
      accuracy: "94%",
      wpm: "83 WPM",
    },
    {
      position: 6,
      name: "YAYA",
      flag: "us",
      avatar: "https://i.pravatar.cc/150?img=6",
      accuracy: "93%",
      wpm: "82 WPM",
    },
    {
      position: 7,
      name: "AAYAN",
      flag: "ie",
      avatar: "https://i.pravatar.cc/150?img=7",
      accuracy: "80%",
      wpm: "80 WPM",
    },
  ];

  return (
    <section className="py-20 px-8 bg-black">
      <div className="mx-auto max-w-6xl">
        {/* Header with Top 3 */}
        <div className="bg-linear-to-r from-brand to-[#d94d05] py-8 text-center shadow-xl relative overflow-visible">
          {/* Title */}
          <h2
            className="text-white uppercase mb-16 font-black text-5xl"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              letterSpacing: "0%",
              textShadow:
                "0px 3.85px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Leaderboard
          </h2>

          {/* Top Players SVG Background */}
          <div className="relative w-full h-64 flex items-center justify-center">
            <img
              src="/images/top-players.svg"
              alt="top players background"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Top 3 Podium - Positioned on SVG circles */}
            <div className="relative flex -top-38 justify-center items-center gap-4 w-full max-w-2xl z-10">
              {topThree.map((player) => (
                <div
                  key={player.position}
                  className={`flex flex-col items-center absolute ${player.placement} ${player.topOffset}`}
                >
                  <span
                    className={`text-white ${player.textSize} font-bold mb-8`}
                  >
                    #{player.position}
                  </span>
                  <div className="relative">
                    <div
                      className={`${
                        player.size
                      } rounded-full overflow-hidden border-4 ${
                        player.borderColor || "border-white"
                      } shadow-2xl`}
                    >
                      <img
                        src={player.avatar}
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <Trophy
                      size={player.trophySize}
                      fill={player.trophyColor}
                      color={player.trophyColor}
                    />
                  </div>
                  <div
                    className={`${
                      player.nameColor || "text-white"
                    } font-bold text-base mt-4`}
                  >
                    {player.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-brand-dark-3 p-10">
          {/* Difficulty Tabs */}
          <div className="grid grid-cols-5 max-w-5xl mx-auto my-10 gap-6 relative z-10">
            {difficulties.map((difficulty) => (
              <DifficultyCard
                key={difficulty}
                difficulty={difficulty}
                isSelected={selectedDifficulty === difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
              />
            ))}
          </div>

          {/* Leaderboard */}
          <div className="space-y-4">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-8 p-6 bg-brand-dark-2 rounded-lg">
              <div className="text-white text-lg font-medium uppercase">
                Position
              </div>
              <div className="text-white text-lg font-medium uppercase">
                Username
              </div>
              <div className="text-center text-white text-lg font-medium uppercase">
                Country
              </div>
              <div className="text-center text-white text-lg font-medium uppercase">
                Accuracy
              </div>
              <div className="text-center text-white text-lg font-medium uppercase">
                WPM
              </div>
            </div>

            {/* Player Rows */}
            {leaderboardData.map((player, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-8 px-8 py-5 bg-brand-dark-4 rounded-lg hover:bg-brand-dark-2 transition-colors duration-200 items-center"
              >
                {/* Position */}
                <div className="text-white font-bold text-lg">
                  {String(player.position).padStart(2, "0")}
                </div>

                {/* Username with Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-dark-1 overflow-hidden shrink-0 border-2 border-brand-dark-4">
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-medium text-lg">
                    {player.name}
                  </span>
                </div>

                {/* Country Flag */}
                <div className="flex justify-center">
                  <img
                    src={`https://flagcdn.com/${player.flag}.svg`}
                    alt={`${player.flag} flag`}
                    className="w-12 h-8 object-cover shadow-sm"
                  />
                </div>

                {/* Accuracy */}
                <div className="text-center text-white font-medium text-lg">
                  {player.accuracy}
                </div>

                {/* WPM */}
                <div className="text-center text-white font-medium text-lg">
                  {player.wpm}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
