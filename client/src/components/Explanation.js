import "../styles/Explanation.css";

function Explanation({ explanation }) {
    return (
        <div className="explanation-container">
            <h3 className="explanation-title">Explanation</h3>
            <p className="explanation-content">{explanation}</p>
        </div>
    );
}

export default Explanation;