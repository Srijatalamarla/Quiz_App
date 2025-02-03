import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useQuizMode } from "../context/QuizModeContext";
import { useScore } from "../context/ScoreContext";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import Explanation from "./Explanation";

import "../styles/Quiz.css";

const TIMER_DURATION = 10;
const POPUP_DURATION = 3; // Duration to show popup in challenge mode

const Quiz = ({ quizData }) => {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
    const [showPopup, setShowPopup] = useState(false);
    const [popupTimeLeft, setPopupTimeLeft] = useState(POPUP_DURATION);
    const [earnedPoints, setEarnedPoints] = useState(0);

    const navigate = useNavigate();
    const { quizMode } = useQuizMode();
    const { score, updateScore, incrementCorrectAnswers, updateTimeTaken, resetStatus } = useScore();

    useEffect(() => {
        resetStatus();
    }, []);

    // Main timer for question
    useEffect(() => {
        if (quizMode === "challenge" && timeLeft > 0 && !isAnswered) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && !isAnswered) {
            handleAnswerSubmission(null);
        }
    }, [timeLeft, isAnswered, quizMode]);

    // Popup timer for challenge mode
    useEffect(() => {
        if (quizMode === "challenge" && showPopup && popupTimeLeft > 0) {
            const popupTimer = setInterval(() => {
                setPopupTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(popupTimer);
        } else if (popupTimeLeft === 0 && showPopup) {
            handleNextQuestion();
        }
    }, [showPopup, popupTimeLeft, quizMode]);

    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.onpopstate = () => {

            if (window.confirm("Are you sure? Your score will be lost if you leave this page.") === true) {
                navigate("/");
            }
            else {
                window.history.pushState(null, document.title, window.location.href);
            }
        }
    }, [navigate]);

    const handleAnswerSubmission = (option) => {
        if (isAnswered) return;

        setSelectedOption(option);
        setIsAnswered(true);
        setShowPopup(true);

        let points = 0;
        if (option?.is_correct) {
            incrementCorrectAnswers();
            points = calculatePoints();
            setEarnedPoints(points);
            updateScore(points);
        }

        if (quizMode === "challenge") {
            setPopupTimeLeft(POPUP_DURATION);
        }
    };

    const calculatePoints = () => {
        if (quizMode !== "challenge") return 10;
        if (timeLeft >= 8) return 10;
        if (timeLeft >= 5) return 5;
        return 3;
    };

    const handleNextQuestion = () => {
        const timeSpent = TIMER_DURATION - timeLeft;
        updateTimeTaken(timeSpent);

        if (currQuestion < quizData.questions.length - 1) {
            setCurrQuestion(currQuestion + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setShowPopup(false);
            setTimeLeft(TIMER_DURATION);
            setPopupTimeLeft(POPUP_DURATION);
        } else {
            navigate("/end");
        }
    };

    const question = quizData.questions[currQuestion];
    const progress = ((currQuestion + 1) / quizData.questions.length) * 100;

    return (
        <div className="content-wrapper">
            <div className="quiz-card">
                <ProgressBar progress={progress} />
                <p className="quiz-card-question-num">
                    Question: {currQuestion + 1}/{quizData.questions.length}
                </p>

                {quizMode === "challenge" && (
                    <p className={`time-left highlight-once ${timeLeft <= 5 ? "time-left-red" : ""}`}>
                        Time Left: {timeLeft} seconds
                    </p>
                )}

                <motion.div
                    className="question-card-container"
                    key={currQuestion}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <Question
                        question={question}
                        selectedOption={selectedOption}
                        isAnswered={isAnswered}
                        handleOptionClick={handleAnswerSubmission}
                    />
                </motion.div>

                <AnimatePresence>
                    {showPopup && (
                        <motion.div
                            className="result-popup"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <div className="result-content">

                                <div className={`result-value ${selectedOption?.is_correct ? 'correct' : 'incorrect'}`}>
                                    <h3 className="result-title">
                                        {selectedOption ? (selectedOption.is_correct ? 'Correct!' : 'Incorrect!') : 'Time Up!'}
                                    </h3>
                                    {selectedOption && selectedOption.is_correct && (
                                        <p className="result-points">Points earned: {earnedPoints}</p>
                                    )}
                                </div>

                                <Explanation explanation={question.detailed_solution} />

                                {quizMode === "challenge" ? (
                                    currQuestion === quizData.questions.length - 1 ? (<p>Finishes in {popupTimeLeft} seconds...</p>) : (<p>Next question in {popupTimeLeft} seconds...</p>)
                                ) : (
                                    <button className="next-btn" onClick={handleNextQuestion}>
                                        {currQuestion === quizData.questions.length - 1 ? 'Finish' : 'Continue'}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Quiz;