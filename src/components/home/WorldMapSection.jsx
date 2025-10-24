import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMapSection = () => {
  // Active locations with coordinates
  const markers = [
    { name: "USA West", coordinates: [-122.4194, 37.7749] }, // San Francisco
    { name: "USA Central", coordinates: [-87.6298, 41.8781] }, // Chicago
    { name: "USA East", coordinates: [-74.006, 40.7128] }, // New York
    { name: "Mexico", coordinates: [-99.1332, 19.4326] }, // Mexico City
    { name: "Colombia", coordinates: [-74.0721, 4.711] }, // Bogota
    { name: "Brazil", coordinates: [-47.9292, -15.7801] }, // Brasilia
    { name: "Argentina", coordinates: [-58.3816, -34.6037] }, // Buenos Aires
    { name: "UK", coordinates: [-0.1276, 51.5074] }, // London
    { name: "France", coordinates: [2.3522, 48.8566] }, // Paris
    { name: "Germany", coordinates: [13.405, 52.52] }, // Berlin
    { name: "Spain", coordinates: [-3.7038, 40.4168] }, // Madrid
    { name: "Scandinavia", coordinates: [10.7522, 59.9139] }, // Oslo
    { name: "Russia West", coordinates: [37.6173, 55.7558] }, // Moscow
    { name: "Russia East", coordinates: [60.6122, 56.8389] }, // Yekaterinburg
    { name: "Nigeria", coordinates: [7.4917, 9.0579] }, // Abuja
    { name: "Kenya", coordinates: [36.8219, -1.2921] }, // Nairobi
    { name: "South Africa", coordinates: [28.0473, -26.2041] }, // Johannesburg
    { name: "Egypt", coordinates: [31.2357, 30.0444] }, // Cairo
    { name: "Saudi Arabia", coordinates: [46.6753, 24.7136] }, // Riyadh
    { name: "India", coordinates: [77.209, 28.6139] }, // New Delhi
    { name: "Pakistan", coordinates: [73.0479, 33.6844] }, // Islamabad
    { name: "China North", coordinates: [116.4074, 39.9042] }, // Beijing
    { name: "China East", coordinates: [121.4737, 31.2304] }, // Shanghai
    { name: "Japan", coordinates: [139.6917, 35.6895] }, // Tokyo
    { name: "Korea", coordinates: [126.978, 37.5665] }, // Seoul
    { name: "Thailand", coordinates: [100.5018, 13.7563] }, // Bangkok
    { name: "Singapore", coordinates: [103.8198, 1.3521] }, // Singapore
    { name: "Indonesia", coordinates: [106.8456, -6.2088] }, // Jakarta
    { name: "Australia West", coordinates: [115.8605, -31.9505] }, // Perth
    { name: "Australia East", coordinates: [151.2093, -33.8688] }, // Sydney
  ];

  return (
    <section className="py-20 px-8 bg-black ">
      <div className="container mx-auto max-w-full rounded-4xl bg-brand-dark-1 p-20">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-brand text-3xl md:text-4xl font-bold mb-4">
            Typing Races Happening All Around the World
          </h2>
          <p className="text-gray-100 text-sm">
            From beginners to pros players across continents are racing to top
            the leaderboard. Join the global typing rally today!
          </p>
        </div>

        {/* World Map */}
        <div className="relative w-full">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 150,
              center: [0, 25],
            }}
            height={500}
            style={{
              width: "100%",
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#8D8A85"
                    stroke="#1F2937"
                    strokeWidth={1}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#7C8A96" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Active Location Markers */}
            {markers.map((marker, index) => (
              <Marker key={index} coordinates={marker.coordinates}>
                <g>
                  {/* Outer Pulse Ring - Animated */}
                  <circle
                    r={12}
                    fill="#F25A06"
                    fillOpacity={0.2}
                    className="animate-ping"
                    style={{
                      animationDuration: "2s",
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                  {/* Marker SVG Icon */}
                  <image
                    href="/images/marker.svg"
                    x={-10}
                    y={-10}
                    width={25}
                    height={25}
                    style={{
                      filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
