/* eslint-disable no-undef */
import {
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db } from "./firebase.js";

async function getPlayerId() {
  let playerId = localStorage.getItem("playerId");

  if (!playerId) {
    let isUnique = false;
    let attempt = 0;

    while (!isUnique) {
      const randomPartLength = 9 + attempt;
      playerId =
        "player_" +
        Math.random()
          .toString(36)
          .slice(2, 2 + randomPartLength);

      const playerDocRef = doc(db, "players", playerId);
      const playerDoc = await getDoc(playerDocRef);

      if (!playerDoc.exists()) {
        isUnique = true;
        await setDoc(playerDocRef, { createdAt: Date.now() });
        localStorage.setItem("playerId", playerId);
      }
      attempt++;
    }
  }

  return playerId;
}

// Automatically submit to leaderboard with React app data
window.submitToLeaderboard = async function (gameResults) {
  if (!gameResults.countryCode || !gameResults.username) {
    console.warn("⚠️ Missing user data, skipping leaderboard submission");
    return;
  }

  const {
    gwam,
    username,
    countryCode,
    difficulty,
    timestamp = Date.now(),
  } = gameResults;
  const playerId = await getPlayerId();
  const date = new Date(timestamp);
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  const leaderboardData = {
    username,
    score: gwam,
    date: formattedDate,
    difficulty,
    country: countryCode,
  };

  const playerDocRef = doc(db, "leaderboard", difficulty, "players", playerId);

  try {
    const playerDoc = await getDoc(playerDocRef);

    if (playerDoc.exists() && playerDoc.data().score >= gwam) {
      console.log("✅ Existing score is higher, not updating leaderboard");
    } else {
      await setDoc(playerDocRef, leaderboardData);
      console.log("✅ Score submitted to leaderboard successfully!");
    }
  } catch (error) {
    console.error("❌ Error submitting to leaderboard:", error);
  }
};
