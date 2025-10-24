import React from "react";

const CountriesSection = () => {
  const countries = [
    { name: "Brazil", flag: "🇧🇷" },
    { name: "China", flag: "🇨🇳" },
    { name: "USA", flag: "🇺🇸" },
    { name: "Honduras", flag: "🇭🇳" },
    { name: "Pakistan", flag: "🇵🇰" },
    { name: "Ireland", flag: "🇮🇪" },
  ];

  return (
    <section className="py-20 px-6 bg-[#1A130B]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Check Out All The Countries Representing Rally Typer!
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="aspect-video bg-gradient-to-br from-[#2B231B] to-[#1A130B] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-[#48443E] hover:border-[#F25A06]"
            >
              <div className="w-full h-full flex items-center justify-center text-6xl">
                {country.flag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
