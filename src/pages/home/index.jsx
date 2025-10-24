import React from "react";
import HeroSection from "@/components/home/HeroSection";
import DifficultySection from "@/components/home/DifficultySection";
import LeaderboardSection from "@/components/home/LeaderboardSection";
import WorldMapSection from "@/components/home/WorldMapSection";
import AboutSection from "@/components/home/AboutSection";
import CountriesSection from "@/components/home/CountriesSection";
import BlogSection from "@/components/home/BlogSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DifficultySection />
      <LeaderboardSection />
      <WorldMapSection />
      <AboutSection />
      <CountriesSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
