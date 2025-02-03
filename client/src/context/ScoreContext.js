import { createContext, useContext, useEffect, useState } from "react";
import { useQuizMode } from "./QuizModeContext";

const ScoreContext = createContext();

export const useScore = () => {
    return useContext(ScoreContext);
};

export const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalTimeTaken, setTotalTimeTaken] = useState(0);
    const { quizMode } = useQuizMode();

    const resetStatus = () => {
        setScore(0);
        setCorrectAnswers(0);
        setTotalTimeTaken(0);
    }
    useEffect(() => {
        resetStatus();
    }, [quizMode]);

    const updateScore = (increment) => {
        setScore(prevScore => prevScore + increment);
    };

    const incrementCorrectAnswers = () => {
        setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    };

    const updateTimeTaken = (time) => {
        setTotalTimeTaken(totalTimeTaken + time);
    };

    return (
        <ScoreContext.Provider value={{
            score,
            correctAnswers,
            totalTimeTaken,
            updateScore,
            incrementCorrectAnswers,
            updateTimeTaken,
            resetStatus
        }}
        >
            {children}
        </ScoreContext.Provider>
    );
};
