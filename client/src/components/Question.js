import Option from "./Option";
import "../styles/Question.css";

function Question({ question, selectedOption, isAnswered, handleOptionClick }) {
    return (
        <div className="question-card">
            <div class="question-container">
                <p className="question-title text">Question:</p>
                <h2 className="question-description">{question.description}</h2>
            </div>

            <div className="options-container">
                <p className="option-title text">Options:</p>
                {question.options.map((option) => {
                    return (
                        <Option
                            key={option.id}
                            option={option}
                            selectedOption={selectedOption}
                            isAnswered={isAnswered}
                            handleOptionClick={handleOptionClick}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Question;