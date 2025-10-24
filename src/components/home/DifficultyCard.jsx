import React from "react";

const DifficultyCard = ({ difficulty, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`aspect-square rounded-xl border-2 border-dashed transition-all duration-300 ${
        isSelected
          ? "bg-brand border-brand scale-110 shadow-2xl"
          : "bg-brand-dark-3 border-white/70 hover:border-brand hover:scale-105 cursor-pointer"
      }`}
    >
      <span
        className={`text-2xl font-black uppercase ${
          isSelected ? "text-white" : "text-gray-300"
        }`}
      >
        {difficulty}
      </span>
    </button>
  );
};

export default DifficultyCard;
