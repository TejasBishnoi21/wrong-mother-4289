import { useState } from "react";
import "./math.css";

const MathQuestion = () => {
  const [quest, setQuest] = useState("");
  const [ans, setAns] = useState("");
  const [corrAns, setCorrAns] = useState(0);
  const [gen, setGen] = useState(false);
  const [steps, setSteps] = useState(0);
  const [game, setGame] = useState(false)

  const generateQ = () => {
    let sect1 = Math.floor(Math.random() * 25);
    let sect2 = Math.floor(Math.random() * 25);
    setSteps(0)

    const question = `${sect1} + ${sect2}`;
    setQuest(question);
    const res = sect1 + sect2;
    setCorrAns(res);
    setGen(!gen);
  };

  const checkAns = () => {
    if (ans == corrAns) {
      alert("Correct Answer");
      genSteps()
    } else {
      alert("Wrong Answer");
    }

    setDefault();
  };

  const genSteps=()=>{
    let myStep = Math.floor(Math.random() * (3 - 1) + 1)
    setSteps(myStep)
  }

  const setDefault = () => {
    setQuest("");
    setAns("");
    setCorrAns(0);
    setGen(false);
  };

  return (
    <>
      <div>
        <p className="quest">
          <span>{quest!==''?"What is ":""}</span>
          {quest}
        </p>
        <p className="steps">
          <span>{steps===0?'You can not move':`Your Steps: ${steps}`}</span>
        </p>
      </div>
      <div style={{marginBottom:20}}>
        <button className="genBtn"
        disabled={game===false}
        onClick={generateQ}>Generate Question</button>

        <button 
        onClick={()=>setGame(true)}
        disabled={game===true}
        className="genBtn">
          Start Game
        </button>
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
