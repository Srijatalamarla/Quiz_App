# Quiz App

## Overview
An interactive Quiz App built with React, featuring different quiz modes, animations, and a dynamic timer.

## Features
- 📋 Multiple quiz modes (Challenge & Normal)
- 🎨 Animated transitions and effects (Framer Motion)
- 🕒 Countdown timer with warnings for low time
- 📊 Score tracking
- 📱 Fully responsive design

## 🛠 Tech Stack
- ⚛️ React.js
- 🎭 Framer Motion (for animations)
- 🔗 React Router (for navigation)

## Prerequisites
Before running the project, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
  
## Installation
To run this project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/Srijatalamarla/Quiz_App.git
   cd Quiz-App
   ```
2. Start the server(proxy server)
    ```sh
    cd server
    node server.js
    ```
    The server will output:
   ```sh
   Server is running on port 5000
   ```
   
3. Start the frontend
    ```sh
    cd client
    npm install
    npm start
    ```

## Screenshots
![Quiz app start screen](https://github.com/user-attachments/assets/e76f5092-d18c-4066-9a86-1831b4d93fd8)
![Quiz_app_result_summary](https://github.com/user-attachments/assets/75c6febc-f862-4a21-a77b-cfc1f86551b9)


## 🎬 Demo Videos

### ▶️ Normal Mode
https://github.com/user-attachments/assets/0ff40f84-359b-4091-bd94-c12121782c85



### ▶️ Challenge Mode
https://github.com/user-attachments/assets/9fc01220-5d3d-4537-8d06-1181b62eed8c



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
2. Answer questions (within the time limit - in challenge mode).
3. View your score.
