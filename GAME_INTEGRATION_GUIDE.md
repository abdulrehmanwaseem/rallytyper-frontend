# Rally Typer - Game Integration Guide

## 🎮 Game Integration Overview

Your vanilla HTML/CSS/JS typing game is now properly integrated into your React (Vite) application using the **iframe approach** for clean separation and communication via `postMessage` API.

---

## 📁 Project Structure

```
rallytyper-frontend/
├── public/
│   └── game/                    # ✅ Vanilla JS game (served as static files)
│       ├── index.html
│       ├── assets/
│       │   ├── css/
│       │   │   └── styles.css
│       │   ├── js/
│       │   │   ├── Data_Variables.js
│       │   │   ├── Game_UI.js
│       │   │   ├── GLTFLoader.js
│       │   │   ├── Main.js
│       │   │   ├── stats.min.js
│       │   │   └── three.min.js
│       │   ├── img/
│       │   └── models/
│
├── src/
│   ├── pages/
│   │   └── game/
│   │       └── index.jsx         # ✅ React wrapper for game iframe
│   ├── components/
│   │   └── home/
│   │       └── DifficultySection.jsx  # ✅ Game launcher
│   ├── lib/
│   │   └── gameApi.js            # ✅ Backend API integration
│   └── routes/
│       └── index.jsx             # ✅ Route configuration
```

---

## 🔄 How It Works

### 1. **User Starts Game**

- User selects difficulty in `DifficultySection.jsx`
- Clicks "LET'S RIDE" button
- React navigates to `/game` route with:
  - `difficulty` (0-4)
  - `userData` (username, country, playerId)

### 2. **Game Loads**

- `GamePage.jsx` renders an iframe pointing to `/game/index.html`
- User data is stored in `sessionStorage` for the game to access
- Game initializes and runs independently

### 3. **Game Completes**

- Game sends results via `postMessage` to parent React app
- React receives the message and triggers backend API call
- Results are saved to your Express.js backend

---

## 📡 Communication Flow

```
┌─────────────────┐
│  React App      │
│  (GamePage)     │
└────────┬────────┘
         │ 1. Navigate with state
         │    {difficulty, userData}
         ▼
┌─────────────────┐
│  Iframe         │
│  (/game/index)  │
└────────┬────────┘
         │ 2. Game completes
         │ 3. postMessage({type: "GAME_RESULTS", payload})
         ▼
┌─────────────────┐
│  React App      │
│  (Event Listener)│
└────────┬────────┘
         │ 4. submitGameResults(payload)
         ▼
┌─────────────────┐
│  Express.js API │
│  /api/leaderboard│
└─────────────────┘
```

---

## 🛠️ Files Modified

### ✅ **Firebase Removed**

- ❌ Deleted `game/assets/js/firebase.js`
- ❌ Deleted `game/assets/js/leaderboard.js`
- ❌ Removed Firebase SDK scripts from `game/index.html`
- ✅ Updated `game/assets/js/Game_UI.js` - removed Firebase submission

### ✅ **React Integration Added**

- ✅ Created `src/pages/game/index.jsx` - Game wrapper component
- ✅ Created `src/lib/gameApi.js` - Backend API service
- ✅ Updated `src/routes/index.jsx` - Added `/game` route
- ✅ Updated `src/components/home/DifficultySection.jsx` - Navigation logic

---

## 🎯 Game Results Object

When the game completes, this data is sent to your backend:

```javascript
{
  time: 45.2,                    // Time in seconds
  accuracy: 97.5,                // Accuracy percentage
  gwam: 85,                      // Gross Words Per Minute
  personalBest: 85,              // Personal best for this difficulty
  place: "1st Place",            // Placement (1st or 2nd)
  difficulty: "normal",          // Difficulty name
  difficultyLevel: 2,            // Difficulty index (0-4)
  username: "Player123",         // Player username
  country: "United States",      // Player country
  countryCode: "US",             // Country code
  playerId: "player_abc123",     // Unique player ID
  timestamp: 1698345600000,      // Unix timestamp
  characters: 225,               // Total characters typed
  mistakes: 5                    // Number of mistakes
}
```

---

## 🔌 Backend API Integration

### **Setup Environment Variable**

Create `.env` file in your React project:

```env
VITE_API_URL=http://localhost:5000/api
```

### **API Endpoints (To Implement in Express.js)**

#### 1. **Submit Game Results**

```
POST /api/leaderboard
Content-Type: application/json

Body: {game results object}
```

#### 2. **Get Leaderboard**

```
GET /api/leaderboard?difficulty=normal&limit=10
```

#### 3. **Get Player Stats**

```
GET /api/player/:playerId/stats
```

### **Usage in React**

```javascript
import {
  submitGameResults,
  getLeaderboard,
  getPlayerStats,
} from "@/lib/gameApi";

// Submit results (already done automatically in GamePage.jsx)
await submitGameResults(gameResults);

// Get leaderboard
const leaderboard = await getLeaderboard("normal", 10);

// Get player stats
const stats = await getPlayerStats("player_abc123");
```

---

## 🚀 How to Use

### **1. Start the Development Server**

```bash
npm run dev
```

### **2. Navigate to Home Page**

```
http://localhost:5173
```

### **3. Select Difficulty & Play**

- Scroll to "CHOOSE DIFFICULTY" section
- Select a difficulty level (NOOB, EASY, NORMAL, HARD, ADVANCE)
- Click "LET'S RIDE"
- Game loads in fullscreen
- Complete the typing race
- Results are automatically saved to backend

### **4. Direct Game Access**

You can also access the game directly at:

```
http://localhost:5173/game
```

---

## 🔧 Customization

### **Update User Data**

In `DifficultySection.jsx`, replace the TODO with your auth context:

```javascript
// Get from your auth context
const { user } = useAuth();

const userData = {
  username: user.username,
  country: user.country,
  countryCode: user.countryCode,
  playerId: user.id,
};
```

### **Add Loading States**

The `GamePage.jsx` already has a loading spinner. Customize it:

```jsx
{
  isLoading && (
    <div className="absolute inset-0 flex items-center justify-center">
      <YourCustomLoader />
    </div>
  );
}
```

### **Handle Results Display**

Add a results modal or navigate to a results page:

```javascript
if (event.data?.type === "GAME_RESULTS") {
  setGameResults(event.data.payload);

  // Navigate to results page
  navigate("/results", { state: { results: event.data.payload } });

  // Or show modal
  setShowResultsModal(true);
}
```

---

## 📊 Database Schema Suggestion

For your Express.js backend, consider this schema:

### **Leaderboard Table**

```javascript
{
  id: ObjectId,
  playerId: String,
  username: String,
  country: String,
  countryCode: String,
  difficulty: String,          // 'noob', 'easy', 'normal', 'hard', 'advanced'
  gwam: Number,
  accuracy: Number,
  time: Number,
  characters: Number,
  mistakes: Number,
  timestamp: Date,
  createdAt: Date
}
```

### **Indexes**

```javascript
// For leaderboard queries
db.leaderboard.createIndex({ difficulty: 1, gwam: -1 });

// For player history
db.leaderboard.createIndex({ playerId: 1, timestamp: -1 });
```

---

## ✅ Checklist

- [x] Removed Firebase integration
- [x] Created React game wrapper (`GamePage.jsx`)
- [x] Added game route (`/game`)
- [x] Set up postMessage communication
- [x] Created backend API service (`gameApi.js`)
- [x] Updated difficulty selector navigation
- [ ] Implement Express.js backend endpoints
- [ ] Add authentication integration
- [ ] Create results page/modal
- [ ] Add error handling for API failures
- [ ] Implement leaderboard display component

---

## 🐛 Troubleshooting

### **Game Not Loading**

- Check if `/public/game/index.html` exists
- Verify Vite is serving static files from `/public`
- Check browser console for errors

### **postMessage Not Working**

- Ensure origins match (both on same domain)
- Check `event.origin` in console
- Verify game is sending message correctly

### **API Calls Failing**

- Check `.env` file has correct `VITE_API_URL`
- Verify backend server is running
- Check CORS settings on Express.js

### **Session Storage Empty**

- Verify navigation is passing state correctly
- Check browser's Application > Session Storage tab

---

## 📚 Additional Resources

- [Window.postMessage() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
- [React Router - useLocation](https://reactrouter.com/en/main/hooks/use-location)
- [Vite - Static Asset Handling](https://vitejs.dev/guide/assets.html)

---

## 🎉 Summary

Your typing game is now:

- ✅ Cleanly integrated into React
- ✅ Independent (no JS conflicts)
- ✅ Communicating via postMessage
- ✅ Ready for backend integration
- ✅ Firebase-free (using your Express.js backend)

Next step: **Implement the Express.js API endpoints** to receive and store game results!
