import React, { useState } from "react";
import DifficultyCard from "./DifficultyCard";

const LeaderboardSection = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("NORMAL");

  const difficulties = ["NOOB", "EASY", "NORMAL", "HARD", "ADVANCE"];

  const topThree = [
    {
      name: "Player 80,000",
      position: 2,
      avatar: "https://i.pravatar.cc/150?img=12",
      color: "cyan",
    },
    {
      name: "Player 100,000",
      position: 1,
      avatar: "https://i.pravatar.cc/150?img=13",
      color: "gold",
    },
    {
      name: "Player 70,000",
      position: 3,
      avatar: "https://i.pravatar.cc/150?img=14",
      color: "pink",
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
      <div className="mx-auto">
        {/* Header with Top 3 */}
        <div className="bg-linear-to-r from-brand to-[#d94d05] py-8 text-center shadow-xl relative overflow-hidden">
          {/* Title */}
          <h2 className="text-white text-5xl font-bold uppercase tracking-wide mb-12">
            Leaderboard
          </h2>

          {/* Top 3 Podium */}
          <div className="flex justify-center items-end gap-6 mb-8 px-4">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                {/* Avatar Container with Medal */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-brand-cyan">
                    <img
                      src={topThree[0].avatar}
                      alt={topThree[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Position Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-dark-3 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white">
                    #2
                  </div>
                </div>
              </div>
              <div className="text-white font-semibold text-sm">
                {topThree[0].name}
              </div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-8">
              <div className="relative mb-3">
                {/* Avatar Container with Medal */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-gold shadow-2xl bg-brand-gold">
                    <img
                      src={topThree[1].avatar}
                      alt={topThree[1].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Position Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-dark-3 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white">
                    #1
                  </div>
                </div>
              </div>
              {/* Trophy */}
              <div className="text-5xl mb-2">🏆</div>
              <div className="text-white font-bold text-base">
                {topThree[1].name}
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                {/* Avatar Container with Medal */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-brand-pink">
                    <img
                      src={topThree[2].avatar}
                      alt={topThree[2].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Position Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-dark-3 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white">
                    #3
                  </div>
                </div>
              </div>
              <div className="text-white font-semibold text-sm">
                {topThree[2].name}
              </div>
            </div>
          </div>
        </div>

        {/* Difficulty Tabs */}
        <div className="grid grid-cols-5 max-w-5xl mx-auto p-10 gap-10">
          {difficulties.map((difficulty) => (
            <DifficultyCard
              key={difficulty}
              difficulty={difficulty}
              isSelected={selectedDifficulty === difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
            />
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="bg-brand-dark-3 rounded-b-3xl overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-8 py-5 bg-brand-dark-1 text-white text-sm font-bold uppercase tracking-wide border-b border-brand-dark-4">
            <div>Position</div>
            <div>Username</div>
            <div className="text-center">Accuracy</div>
            <div className="text-center">WPM</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-brand-dark-4">
            {leaderboardData.map((player, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 px-8 py-5 items-center hover:bg-brand-dark-2 transition-colors duration-200"
              >
                {/* Position */}
                <div className="text-white font-bold text-lg">
                  {String(player.position).padStart(2, "0")}
                </div>

                {/* Username with Avatar and Flag */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-dark-1 overflow-hidden flex-shrink-0 border-2 border-brand-dark-4">
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-base">
                      {player.name}
                    </span>
                    <img
                      src={`https://flagcdn.com/${player.flag}.svg`}
                      alt={`${player.flag} flag`}
                      className="w-6 h-4 object-cover rounded-sm shadow-sm"
                    />
                  </div>
                </div>

                {/* Accuracy */}
                <div className="text-center text-white font-semibold text-base">
                  {player.accuracy}
                </div>

                {/* WPM */}
                <div className="text-center text-white font-semibold text-base">
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
