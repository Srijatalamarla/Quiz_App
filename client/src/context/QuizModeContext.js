import React, { createContext, useState, useContext } from 'react';

const QuizModeContext = createContext();

export const useQuizMode = () => {
    return useContext(QuizModeContext);
};

export const QuizModeProvider = ({ children }) => {
    const [quizMode, setQuizMode] = useState(null);

    const setMode = (mode) => {
        setQuizMode(mode);
    };

    return (
        <QuizModeContext.Provider value={{ quizMode, setMode }}>
            {children}
        </QuizModeContext.Provider>
    );
};
