/* eslint-disable no-undef */
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db } from "./firebase.js";

async function getPlayerId() {
  let playerId = localStorage.getItem("playerId");

  // If playerId is not already stored, generate a unique one
  if (!playerId) {
    let isUnique = false;
    let attempt = 0;

    while (!isUnique) {
      // Generate a new random playerId
      const randomPartLength = 9 + attempt;
      playerId =
        "player_" +
        Math.random()
          .toString(36)
          .slice(2, 2 + randomPartLength);

      // Check if this playerId already exists in Firestore
      const playerDocRef = doc(db, "players", playerId);
      const playerDoc = await getDoc(playerDocRef);

      if (!playerDoc.exists()) {
        // If it doesn't exist, mark as unique, add it to Firestore, and save in local storage
        isUnique = true;
        await setDoc(playerDocRef, { createdAt: Date.now() }); // Optional: store creation timestamp or other metadata
        localStorage.setItem("playerId", playerId);
      }
      attempt++;
    }
  }

  return playerId;
}

function getPlayerDefaultUsername() {
  let username = localStorage.getItem("username");

  return username;
}

let countries = [];
fetch("assets/countries.json")
  .then((response) => response.json())
  .then((data) => {
    countries = data;
  })
  .catch((error) => console.error("Error loading countries:", error));
// Function to handle the form submission
const leaderboardForm = document.querySelector(".leaderboard-form");
const submitButton = leaderboardForm.querySelector("button");

const usernameInput = document.querySelector('input[name="username"]');
const countryInput = document.querySelector('input[name="country"]');

const dropdown = document.createElement("ul"); // Dropdown container
dropdown.className = "countriesContainer";

document.body.appendChild(dropdown);
countryInput.addEventListener("input", () => {
  const query = countryInput.value.trim().toLowerCase();
  dropdown.innerHTML = ""; // Clear previous suggestions
  dropdown.style.display = "none";

  console.log(countries)
  if (query) {
    const matches = countries.filter((country) => country.name.toLowerCase().startsWith(query));

    if (matches.length > 0) {
      matches.forEach((match) => {
        const item = document.createElement("li");
        item.textContent = match.name;
        item.className = "countryItem";

        const flag = document.createElement("img");
        flag.src = match.flag; // Assuming match.flag contains the URL to the flag image
        flag.alt = ``;
        flag.style.width = "20px";
        flag.style.height = "15px";

        // Append the flag to the item
        item.prepend(flag);

        // Handle click on suggestion
        item.addEventListener("click", () => {
          countryInput.value = match.name;
          dropdown.style.display = "none";
        });

        dropdown.appendChild(item);
      });

      // Position the dropdown
      const rect = countryInput.getBoundingClientRect();
      dropdown.style.left = `${rect.left + window.scrollX}px`;
      dropdown.style.top = `${rect.bottom + window.scrollY}px`;
      dropdown.style.width = `${rect.width}px`;
      dropdown.style.display = "block";
    }
  }
});

// Handle Enter key to select the first suggestion
countryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && dropdown.style.display === "block") {
    const firstItem = dropdown.querySelector("li");
    if (firstItem) {
      countryInput.value = firstItem.textContent;
      dropdown.style.display = "none";
    }
    event.preventDefault(); // Prevent form submission
  }
});

// Close dropdown if clicked outside
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target) && event.target !== countryInput) {
    dropdown.style.display = "none";
  }
});

let storedUsername = getPlayerDefaultUsername();
if (storedUsername) {
  usernameInput.value = storedUsername; // Dynamically set the input value
}

leaderboardForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the default form submission

  const countrySelected = countryInput.value.trim()

   // Map the country name to the corresponding country code
   const country = countries.find((c) => c.name === countrySelected); // Assuming countries is an array of objects like { name: "United States", code: "US" }
  const countryCode = country ? country.code : null;
  
  if (!countryCode) {
    alert("Please select a valid country.");
    return;
  }

  const username = usernameInput.value.trim();
  if (!username) {
    alert("Please enter a valid username.");
    return;
  }

  // Calculate the GWAM (you can change these calculations as per your game logic)
  let time = car2.finishingTime / 1000; // in seconds
  let accuracy = 100 - (gameState.stats.mistakes / (gameState.stats.characters + gameState.stats.mistakes)) * 100;
  accuracy = Math.round(accuracy * 100) / 100;
  let GWAM = gameState.stats.characters / 5 / (time / 60); // 1 word = 5 characters
  GWAM = Math.round(GWAM * 100) / 100;

  // Get the current difficulty (you can adjust this based on your game state)
  const difficultyNames = ["noob", "easy", "normal", "hard", "advanced"];
  const currentLevelName = difficultyNames[difficulty];

  // Generate a unique player ID
  const playerId = await getPlayerId();

  const timestamp = Date.now();
  const date = new Date(timestamp);

  // Get the month, day, and year
  const month = date.getMonth() + 1; // getMonth() returns month from 0 (January) to 11 (December)
  const day = date.getDate(); // getDate() returns the day of the month (1-31)
  const year = date.getFullYear(); // getFullYear() returns the year (e.g., 2024)

  // Format as month/day/year
  const formattedDate = `${month}/${day}/${year}`;

  // Create the document data
  const leaderboardData = {
    username: username,
    score: GWAM,
    date: formattedDate,
    difficulty: currentLevelName,
    country: countryCode,
  };

  submitButton.textContent = "Submitting..."; // Show submitting state
  submitButton.disabled = true; // Disable the button to prevent multiple clicks

  const playerDocRef = doc(db, "leaderboard", currentLevelName, "players", playerId);

  try {
    // Fetch existing data for the player
    const playerDoc = await getDoc(playerDocRef);

    if (playerDoc.exists() && playerDoc.data().score >= GWAM) {
      submitButton.textContent = "Your existing score is higher!";
      submitButton.disabled = true;
    } else {
      // Update Firestore with the new higher score
      await setDoc(playerDocRef, leaderboardData);

      localStorage.setItem("username", username);
      submitButton.textContent = "Submitted!";
      storedUsername = username;
      console.log("Score stored successfully!");
    }
  } catch (error) {
    console.error("Error storing score in Firestore:", error);
    submitButton.textContent = "Submission Failed";
  }
});
