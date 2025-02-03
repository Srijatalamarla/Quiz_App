# Quiz App

## Overview
A fun and interactive Quiz App built with React and Framer Motion, featuring different quiz modes, animations, and a dynamic timer.

## Features
- 📋 Multiple quiz modes (Challenge, Timed, etc.)
- 🎨 Animated transitions and effects (Framer Motion)
- 🕒 Countdown timer with warnings for low time
- 📊 Score tracking and leaderboard
- 📱 Fully responsive design

## 🛠 Tech Stack
- ⚛️ React.js
- 🎭 Framer Motion (for animations)
- 🎨 ShadCN/UI (for UI components)
- 🔗 React Router (for navigation)

## Screenshots
![Quiz App Screenshot]("C:\Users\talam\OneDrive\Pictures\Saved Pictures\quiz_app_start_screen.png")
![Quiz App Result Summary Screenshot]("C:\Users\talam\OneDrive\Pictures\Saved Pictures\quiz_app_result_summary.png")

## 🎬 Demo Videos

### ▶️ Normal Mode
[![Normal Mode](C:\Users\talam\OneDrive\Pictures\Saved Pictures)]("C:\Users\talam\Videos\Quiz_normal_mode.mkv")

### ▶️ Challenge Mode
[![Challenge Mode]("C:\Users\talam\OneDrive\Pictures\Saved Pictures\quiz_app_challenge_mode.png")]("C:\Users\talam\Videos\Quiz_challenge_mode.mkv")

## Installation
To run this project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Quiz-App.git
   cd Quiz-App
   ```
2. Install dependencies
    ```sh
    npm install
    ```
3. Start the development server
    ```sh
    npm start
    ```

## Folder Structure

```
└── 📁client
    └── 📁public
        └── index.html
    └── 📁src
        └── App.css
        └── App.js
        └── 📁assets
            └── 📁videos
                └── bg_video.mp4
        └── 📁components
            └── EndScreen.js
            └── Explanation.js
            └── Option.js
            └── ProgressBar.js
            └── Question.js
            └── Quiz.js
            └── StartScreen.js
        └── 📁context
            └── QuizModeContext.js
            └── ScoreContext.js
        └── index.js
        └── 📁styles
            └── EndScreen.css
            └── Explanation.css
            └── Option.css
            └── ProgressBar.css
            └── Question.css
            └── Quiz.css
            └── StartScreen.css
    └── .env
    └── .gitignore
    └── package-lock.json
    └── package.json
└── 📁server
    └── server.js
└── .env
└── .gitignore
└── README.md
```


## 🔧 Environment Variables

To ensure proper communication between the frontend and backend, set up `.env` files in both the **client** and **root** directories.

### 📂 Client (`client/.env`)
Create a `.env` file inside the `client` folder and add:

```env
REACT_APP_API_URL=http://localhost:5000
```

- This URL should match the backend server's URL where it is running
- If your backend is deployed update this with the correct hosted URL.

### 📂 Root (`.env`)
Create a `.env` file inside the `root` folder and add:

```env
PORT=5000
API_URL=https://api-url....
```

- `PORT` - Specifies backend server port(change as needed).
- `API_URL` - Set this to the URL from which data is fetched.

## Usage
1. Choose a quiz mode.
2. Answer questions within the time limit.
3. View your score.