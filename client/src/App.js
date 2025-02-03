import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";
import EndScreen from "./components/EndScreen";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { QuizModeProvider } from "./context/QuizModeContext";
import { ScoreProvider } from "./context/ScoreContext";
import "./App.css";
import backgroundVideo from "./assets/videos/bg_video.mp4";

function App() {
  const [quizData, setQuizData] = useState(null);

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${REACT_APP_API_URL}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setQuizData(data))
      .catch(error => {
        console.error('Fetch error: ', error);
      });
  }, []);


  if (!quizData) {
    // quiz loader
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <div style={{
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          animation: 'spin 1s linear infinite'
        }}>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <QuizModeProvider>
      <ScoreProvider>
        <Router>
          {/*Video background */}
          <div className="video-container">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="video-background"
              src={backgroundVideo}
            >
            </video>
          </div>
          <div className="container">
            <Routes>
              <Route path="/" element={<StartScreen topic={quizData.title} />} />
              <Route path="/quiz" element={<Quiz quizData={quizData} />} />
              <Route path="/end" element={<EndScreen totalQuestions={quizData.questions.length} />} />
            </Routes>
          </div>
        </Router>
      </ScoreProvider>
    </QuizModeProvider>
  );
}

export default App;