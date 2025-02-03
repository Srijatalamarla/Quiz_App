import { useNavigate } from "react-router-dom";
import { useScore } from "../context/ScoreContext";
import { useQuizMode } from "../context/QuizModeContext";
import { useEffect } from "react";

import "../App.css";
import "../styles/EndScreen.css";

function EndScreen({ totalQuestions }) {
    const navigate = useNavigate();
    const { quizMode } = useQuizMode();
    const { score, correctAnswers, totalTimeTaken } = useScore();

    useEffect(() => {
        window.onpopstate = () => {
            navigate("/");
        }
    }, [navigate]);

    const incorrectAnswers = totalQuestions - correctAnswers;

    let feedback;
    if (correctAnswers === totalQuestions) {
        feedback = "Excellent! Perfect score!";
    } else if (correctAnswers / totalQuestions >= 0.7) {
        feedback = "Great Job!";
    } else {
        feedback = "Better luck next time!";
    }

    return (
        <div className="content-wrapper">
            <div className="end-screen-container">
                <h2 className="end-screen-title">Quiz Completed!!!</h2>
                <div className="result-summary">
                    <p>Score: <span className="score">{score}/{totalQuestions * 10}</span></p>
                    <p>Correct Answers: <span className="correct-ans">{correctAnswers}</span></p>
                    <p>Incorrect Answers: <span className="incorrect-ans">{incorrectAnswers}</span></p>
                    {quizMode === "challenge" && (<p>Total Time Taken: <span className="time-taken">{totalTimeTaken}s</span></p>)}
                    <p><span className="feedback">{feedback}</span></p>
                    <button className="back-btn" onClick={() => navigate("/")}>Back to Start</button>
                </div>
            </div>
        </div>
    );
}

export default EndScreen;