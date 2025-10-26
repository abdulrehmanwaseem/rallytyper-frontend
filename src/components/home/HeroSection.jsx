import React from "react";
import { Button } from "@/components/ui/button";
import { getFlagUrl } from "@/lib/utils";

const HeroSection = () => {
  const topPlayers = [
    {
      rank: 2,
      username: "Vazani",
      subtitle: "Mr. Vichar",
      flagCode: "US",
      accuracy: "98%",
      wpm: "98 WPM",
      avatar: "https://i.pravatar.cc/150?img=12",
      bgColor: "bg-white",
      borderColor: "bg-white",
    },
    {
      rank: 1,
      username: "Imran",
      subtitle: "Imran Sidat",
      flagCode: "EN",
      accuracy: "97%",
      wpm: "97 WPM",
      avatar: "https://i.pravatar.cc/150?img=33",
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
    },
    {
      rank: 3,
      username: "Jonathan",
      subtitle: "Mr. WSM",
      flag: "BR",
      accuracy: "96%",
      wpm: "95 WPM",
      avatar: "https://i.pravatar.cc/150?img=11",
      bgColor: "bg-[#FF8228]",
      borderColor: "border-[#FF8228]",
    },
  ];

  const leaderboardPlayers = [
    {
      username: "USMAN",
      flagCode: "US",
      accuracy: "98%",
      wpm: "87 WPM",
      avatar: topPlayers[0].avatar,
      bgColor: "bg-brand-yellow",
    },
    {
      username: "JOS",
      flagCode: "CN",
      accuracy: "97%",
      wpm: "87 WPM",
      avatar: topPlayers[1].avatar,
      bgColor: "bg-[#1A1B3D]",
    },
    {
      username: "DAN",
      flagCode: "BR",
      accuracy: "96%",
      wpm: "85 WPM",
      avatar: topPlayers[2].avatar,
      bgColor: "bg-orange-950",
    },
    {
      username: "JOS",
      flagCode: "NG",
      accuracy: "95%",
      wpm: "85 WPM",
      avatar: null,
    },
    {
      username: "JOS",
      flagCode: "AR",
      accuracy: "92%",
      wpm: "85 WPM",
      avatar: null,
    },
    {
      username: "JOS",
      flagCode: "PK",
      accuracy: "91%",
      wpm: "85 WPM",
      avatar: null,
    },
    {
      username: "JOS",
      flagCode: "IE",
      accuracy: "99%",
      wpm: "85 WPM",
      avatar: null,
    },
    {
      username: "JOS",
      flagCode: "US",
      accuracy: "89%",
      wpm: "85 WPM",
      avatar: null,
    },
  ];

  return (
    <section className="relative min-h-screen py-10  overflow-hidden">
      <div className=" mx-auto px-6 lg:px-18 relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
          {/* Left Content */}
          <div className="text-white space-y-10 mt-20">
            <h1
              className="text-5xl lg:text-7xl space-y-2.5 font-medium leading-[1.1]"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              <span className="text-brand block">Master Your Typing</span>
              <span className="text-brand flex items-center gap-2">
                Skills with RallyTyper
                <img
                  src="/images/tyre.svg"
                  alt="Tyre"
                  className="inline-block w-14 h-14 lg:w-22 lg:h-22"
                />
              </span>
              <span className="text-white block mt-3">
                The Ultimate Typing Game!
              </span>
            </h1>
            <p
              className="text-lg lg:text-2xl text-white/90 max-w-2xl leading-11"
              style={{ fontFamily: "ADLaM Display, sans-serif" }}
            >
              Get ready for a high-speed challenge where your typing skills
              determine your success! All while having fun. Best of all. it's a
              free typing game online that helps you improve with every race!
            </p>
          </div>

          {/* Right Content - Leaderboard */}
          <div className="bg-linear-to-b from-[#CF4B03] to-brand rounded-2xl px-6 py-4 shadow-2xl">
            {/* Leaderboard Header */}
            <div className="text-center mb-2">
              <h2
                className="text-white text-2xl lg:text-4xl text-shadow-lg font-bold mb-16"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                OUR TOP PLAYERS
              </h2>

              <div className="flex justify-center items-end gap-6 mb-2">
                {/* Top 3 Players - Reordered: 2nd, 1st, 3rd */}
                {[topPlayers[0], topPlayers[1], topPlayers[2]].map((player) => {
                  const isFirst = player.rank === 1;
                  const isSecond = player.rank === 2;
                  const isThird = player.rank === 3;

                  return (
                    <div
                      key={player.rank}
                      className={`flex flex-col items-center ${
                        isFirst ? "z-20" : "z-10"
                      } ${
                        isSecond
                          ? "relative left-9 bottom-4"
                          : isThird
                          ? "relative right-9 bottom-4"
                          : ""
                      }`}
                      style={{ fontFamily: "'NATS Regular', sans-serif" }}
                    >
                      <div
                        className={`relative ${
                          isFirst ? "w-32 h-32" : "w-21 h-21"
                        }`}
                      >
                        {/* 👑 Crown for rank 1 */}
                        {isFirst && (
                          <img
                            src="/images/crown.png"
                            alt="Crown"
                            className="absolute -top-14 left-1/2 -translate-x-1/2 w-23 h-20 z-20"
                          />
                        )}
                        <div
                          className={`w-full h-full rounded-full border-4 ${player.borderColor} ${player.bgColor} flex items-center justify-center overflow-hidden`}
                        >
                          <img
                            src={player.avatar}
                            alt={player.username}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className={`absolute -bottom-4 left-1/2 -translate-x-1/2 ${player.bgColor} w-8 h-8 rounded-full flex items-center justify-center  font-medium text-sm border-3 border-brand-blue`}
                        >
                          {player.rank}
                        </div>
                      </div>
                      <p className="text-white text-lg mt-3">
                        {player.username}
                      </p>
                      <p className="text-white/80 -mt-2">{player.wpm}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Leaderboard Table */}
            <div className="space-y-1">
              {/* Table Header */}
              <div
                className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 bg-brand-dark-4 px-8 py-3 mb-3 rounded-xl text-white font-bold text-sm uppercase"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                <div>USERNAME</div>
                <div className="text-center">ACCURACY</div>
                <div className="text-center">WPM</div>
              </div>

              {/* All Players */}
              {leaderboardPlayers.map((player, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[1.5fr_1fr_1fr] gap-2 px-6 py-2 ${
                    player.bgColor || "bg-brand-dark-4"
                  } rounded-xl border-none hover:brightness-110 transition-all `}
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-white`}
                    >
                      <img
                        src={player.avatar || "/images/avatar.svg"}
                        alt={player.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white font-bold text-base mr-1">
                      {player.username}
                    </span>
                    <img
                      src={getFlagUrl(player.flagCode)}
                      alt={`${player.username} flag`}
                      className="w-8 object-cover"
                    />
                  </div>
                  <div className="text-center text-white font-bold text-base flex items-center justify-center">
                    {player.accuracy}
                  </div>
                  <div className="text-center text-white font-bold text-base flex items-center justify-center">
                    {player.wpm}
                  </div>
                </div>
              ))}

              {/* View More Button */}
              <div className="text-center mt-3">
                <Button variant="brandDark" size="xl">
                  View More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
