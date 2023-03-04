import { useState } from "react";
import "./math.css";

const MathQuestion = () => {
  const [quest, setQuest] = useState("");
  const [ans, setAns] = useState("");
  const [corrAns, setCorrAns] = useState(0);
  const [gen, setGen] = useState(false);

  const generateQ = () => {
    let sect1 = Math.floor(Math.random() * 25);
    let sect2 = Math.floor(Math.random() * 25);

    const question = `${sect1} + ${sect2}`;
    setQuest(question);
    const res = sect1 + sect2;
    setCorrAns(res);
    setGen(!gen);
  };

  const checkAns = () => {
    if (ans == corrAns) {
      alert("Correct Answer");
    } else {
      alert("Wrong Answer");
    }

    setDefault();
  };

  const setDefault = () => {
    setQuest("");
    setAns("");
    setCorrAns(0);
    setGen(false);
  };

  return (
    <>
      <div>
        <p>{quest}</p>
      </div>
      <div style={{marginBottom:20}}>
        <button className="genBtn"
        onClick={generateQ}>Generate Question</button>
      </div>

      <div className="inputBox">
        <input
          type="number"
          placeholder="Enter answer"
          value={ans}
          onChange={(e) => setAns(e.target.value)}
        />
        <button disabled={gen === false} onClick={checkAns}>
          Submit
        </button>
      </div>
    </>
  );
};

const ResultQues = () => {};

export { MathQuestion, ResultQues };
