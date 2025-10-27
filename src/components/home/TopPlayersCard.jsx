import React from "react";

const TopPlayersCard = () => {
  const topPlayers = [
    {
      id: 1,
      name: "USMAN",
      flag: "🇺🇸",
      accuracy: "98%",
      wpm: "87 WPM",
      rank: 1,
    },
    {
      id: 2,
      name: "JOS",
      flag: "🇨🇳",
      accuracy: "97%",
      wpm: "87 WPM",
      rank: 2,
    },
    {
      id: 3,
      name: "DAN",
      flag: "🇧🇷",
      accuracy: "96%",
      wpm: "85 WPM",
      rank: 3,
    },
    {
      id: 4,
      name: "JOS",
      flag: "🇮🇪",
      accuracy: "95%",
      wpm: "85 WPM",
      rank: 4,
    },
    {
      id: 5,
      name: "JOS",
      flag: "🇵🇰",
      accuracy: "93%",
      wpm: "85 WPM",
      rank: 5,
    },
    {
      id: 6,
      name: "JOS",
      flag: "🇮🇪",
      accuracy: "99%",
      wpm: "85 WPM",
      rank: 6,
    },
    {
      id: 7,
      name: "JOS",
      flag: "🇸🇬",
      accuracy: "89%",
      wpm: "85 WPM",
      rank: 7,
    },
  ];

  const topThree = [
    { name: "Kavin", score: "90,000", image: "👤", position: 2 },
    { name: "Jonathan", score: "87,000", image: "👤", position: 1 },
    { name: "Jonathan", score: "", image: "👤", position: 3 },
  ];

  return (
    <div className="bg-linear-to-b from-[#F25A06] to-[#d94d05] rounded-3xl p-6 shadow-2xl w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-white text-2xl font-bold uppercase tracking-wide">
          Our Top Players
        </h2>
        <div className="text-6xl mt-2">👑</div>
      </div>

      {/* Top 3 Players */}
      <div className="flex justify-center items-end gap-4 mb-8">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#2B231B] flex items-center justify-center text-3xl border-4 border-white">
            {topThree[0].image}
          </div>
          <div className="text-white font-bold mt-2 text-sm">
            {topThree[0].name}
          </div>
          <div className="text-white text-xs">{topThree[0].score}</div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center -mt-4">
          <div className="w-20 h-20 rounded-full bg-[#2B231B] flex items-center justify-center text-4xl border-4 border-yellow-400">
            {topThree[1].image}
          </div>
          <div className="text-4xl mt-1">🏆</div>
          <div className="text-white font-bold text-sm">{topThree[1].name}</div>
          <div className="text-white text-xs">{topThree[1].score}</div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#2B231B] flex items-center justify-center text-3xl border-4 border-white">
            {topThree[2].image}
          </div>
          <div className="text-white font-bold mt-2 text-sm">
            {topThree[2].name}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#2B231B] rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-2 px-4 py-3 bg-[#1A130B] text-white text-xs font-semibold uppercase">
          <div>Username</div>
          <div className="text-center">Accuracy</div>
          <div className="text-center">WPM</div>
          <div></div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-[#48443E]">
          {topPlayers.map((player) => (
            <div
              key={player.id}
              className="grid grid-cols-4 gap-2 px-4 py-3 items-center hover:bg-[#302D29] transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1A130B] flex items-center justify-center text-white text-xs">
                  👤
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm font-semibold">
                    {player.name}
                  </span>
                  <span className="text-lg">{player.flag}</span>
                </div>
              </div>
              <div className="text-center text-white text-sm font-semibold">
                {player.accuracy}
              </div>
              <div className="text-center text-white text-sm font-semibold">
                {player.wpm}
              </div>
              <div className="flex justify-end">
                <div className="h-1 w-16 bg-linear-to-r from-[#F25A06] to-transparent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-6 text-center">
        <button className="bg-[#1A130B] hover:bg-[#302D29] text-white font-semibold px-8 py-2 rounded-lg transition-colors">
          View More
        </button>
      </div>
    </div>
  );
};

export default TopPlayersCard;
