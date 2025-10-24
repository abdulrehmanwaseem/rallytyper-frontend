import React from "react";

const WorldMapSection = () => {
  return (
    <section className="py-20 px-6 bg-[#1A130B]">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-[#F25A06] text-3xl md:text-4xl font-bold mb-2">
            Lorem Ipsum is simply dummy text of the printing and.
          </h2>
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* World Map */}
        <div className="relative">
          <img
            src="/images/map.svg"
            alt="World Map"
            className="w-full h-auto opacity-80"
          />

          {/* Location Pins - These would be positioned absolutely based on your map */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#F25A06] rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-pulse">
            <span className="text-white text-xs">📍</span>
          </div>
          <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-[#F25A06] rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-pulse">
            <span className="text-white text-xs">📍</span>
          </div>
          <div className="absolute top-1/2 left-2/3 w-8 h-8 bg-[#F25A06] rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-pulse">
            <span className="text-white text-xs">📍</span>
          </div>
          <div className="absolute top-2/3 left-1/3 w-8 h-8 bg-[#F25A06] rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-pulse">
            <span className="text-white text-xs">📍</span>
          </div>
          <div className="absolute top-1/2 left-3/4 w-8 h-8 bg-[#F25A06] rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-pulse">
            <span className="text-white text-xs">📍</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
