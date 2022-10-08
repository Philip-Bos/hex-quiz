import "./App.css";
import { useEffect, useState } from "react";

const getRandomColor = () => {
  let randomColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  return randomColor;
};

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correct, setCorrect] = useState("");
  const [score, setScore] = useState(0);

  const pickColor = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    pickColor();
  }, []);

  function handleClickedAnswer(answer) {
    if (answer === color) {
      setScore(score + 1);
      setCorrect(true);
      pickColor();
    } else {
      setScore(0);
      setCorrect(false);
    }
  }

  return (
    <div className="App">
      <div className="cont">
        <h1>Hex Code Quiz</h1>
        <div style={{ backgroundColor: color }} className="colored-div" />
        <div className="quiz-buttons">
          {answers.map((answer) => (
            <button
              className="quiz-button"
              onClick={() => handleClickedAnswer(answer)}
              key={answer}
            >
              {answer}
            </button>
          ))}
        </div>
        {correct === true ? (
          <p className="right answer-signal">That's right! :)</p>
        ) : correct === false ? (
          <p className="wrong answer-signal">Thats Wrong :(</p>
        ) : (
          <p className="answer-signal">Pick an answer to get started</p>
        )}
        <p>Score: {score}</p>
      </div>
    </div>
  );
}

export default App;
