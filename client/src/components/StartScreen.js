import { useNavigate } from "react-router-dom";
import { useQuizMode } from "../context/QuizModeContext";
import { useState } from "react";
import "../styles/StartScreen.css";

function StartScreen({ topic }) {
    const navigate = useNavigate();
    const { setMode } = useQuizMode();
    const [countdown, setCountdown] = useState(0);

    const handleStart = (mode) => {
        setMode(mode);
        setCountdown(3);

        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate("/quiz");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }

    if (countdown > 0) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '4rem',
                color: 'white'
            }}>
                <div style={{
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                }}>
                    {/* Spinning Loader */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: '8px solid #f3f3f3',
                        borderTop: '8px solid rgb(255, 0, 0)',
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        animation: 'spin 1s linear infinite',
                    }}>
                    </div>
                    {/* Static Countdown Number */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '2rem',
                        color: 'white'
                    }}>
                        {countdown}
                    </div>
                </div>

                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }



    return (
        <div className="content-wrapper fade-in">
            <h1 className="start-title">It's <span>Quiz</span> Time!!!</h1>
            <div className="start-contents">
                <p className="start-quiz-topic">Test Your knowledge on {topic}</p>
                <p className="start-quiz-mode-title">Select Quiz Mode</p>
                <div className="mode-buttons">
                    <button onClick={() => handleStart("normal")} className="mode-btn">Normal Mode</button>
                    <button onClick={() => handleStart("challenge")} className="mode-btn">Challenge Mode</button>
                </div>
            </div>
        </div>
    );
}

export default StartScreen;