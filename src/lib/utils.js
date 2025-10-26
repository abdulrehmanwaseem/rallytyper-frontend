import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import countries from "@/data/countries.json";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getFlagUrl = (code) => {
  const country = countries.find((c) => c.code === code);
  console.log("Country found for code", code, ":", country);
  return country?.flag || `https://flagcdn.com/w40/${code.toLowerCase()}.png`; // fallback
};
