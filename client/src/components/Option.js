import "../styles/Option.css";

function Option({ option, selectedOption, isAnswered, handleOptionClick }) {
    const buttonStyle = {
        backgroundColor: selectedOption?.id === option.id
            ? (option.is_correct ? 'lightgreen' : 'pink')
            : 'transparent'
    };

    return (
        <button
            className="option-btn"
            onClick={() => handleOptionClick(option)}
            style={buttonStyle}
            disabled={isAnswered}
        >
            {option.description}
        </button>
    );
}

export default Option;