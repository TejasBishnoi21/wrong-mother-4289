import React, { useState } from "react";
import { MathQuestion } from "../Components/MathQuestion";
import "./Game.css";

const Game = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [chance, setChance] = useState(false);

  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const handleChance=()=>{
    setChance(!chance)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValue(text);
    setText("");
  };

  return (
    <div className="bground">
      <p>Gaming</p>
      <div className="gaming">
        {/* <h1>Track</h1> */}
        <div className="board">
          <div>
            <div className="slider1">
              <div className="slot">{count === 10 ? "😊" : "."}</div>
              <div className="slot">{count === 9 ? "😊" : "."}</div>
              <div className="slot">{count === 8 ? "😊" : "."}</div>
              <div className="slot">{count === 7 ? "😊" : "."}</div>
              <div className="slot">{count === 6 ? "😊" : "."}</div>
              <div className="slot">{count === 5 ? "😊" : "."}</div>
              <div className="slot">{count === 4 ? "😊" : "."}</div>
              <div className="slot">{count === 3 ? "😊" : "."}</div>
              <div className="slot">{count === 2 ? "😊" : "."}</div>
              <div className="slot">{count === 1 ? "😊" : "."}</div>
              <div className="slot">{count === 0 ? "😊" : "."}</div>

              <button 
              onClick={()=> setCount(prev=>prev+1)}
              disabled={count>=10}>
                Move
              </button>
            </div>
          </div>
          <div>
            <div className="slider1">
              <div className="slot">{count2 === 10 ? "😊" : "."}</div>
              <div className="slot">{count2 === 9 ? "😊" : "."}</div>
              <div className="slot">{count2 === 8 ? "😊" : "."}</div>
              <div className="slot">{count2 === 7 ? "😊" : "."}</div>
              <div className="slot">{count2 === 6 ? "😊" : "."}</div>
              <div className="slot">{count2 === 5 ? "😊" : "."}</div>
              <div className="slot">{count2 === 4 ? "😊" : "."}</div>
              <div className="slot">{count2 === 3 ? "😊" : "."}</div>
              <div className="slot">{count2 === 2 ? "😊" : "."}</div>
              <div className="slot">{count2 === 1 ? "😊" : "."}</div>
              <div className="slot">{count2 === 0 ? "😊" : "."}</div>

              <button
              onClick={()=> setCount2(prev=>prev+1)}
              disabled={count2>=10}>
                Move
              </button>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        <div className="game2">
          <div className="image">
            <img
              src="https://media.istockphoto.com/id/1339308675/vector/level-up-game-icon-vector-bonus-casino-reward-badge-achievement-award-sticker-golden-trophy.jpg?s=612x612&w=0&k=20&c=mDseviFDBHJSWwJaJZ8-Hm9ID8KcqCKJrjJLq9o1m_M="
              alt=""
            />
          </div>
          <div className="resultBox">
            <p>{count===10?"Player 1 Won the game":""}</p>
            <p>{count2===10?"Player 2 Won the game":""}</p>
          </div>
          <div className="questionBox">
            <p>
              <MathQuestion />
            </p>
          </div>
          
          <div className="team">
            <button 
            disabled={true}
            onClick={()=>handleChance}>
              Player1</button>
            <button 
            disabled={chance===false}
            onClick={()=>handleChance}>
              Player2</button>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        <div className="chat">
          <div className="chat1">{value}</div>
          <div className="chat2">
            {/* <form onSubmit={handleSubmit}> */}
            <input
              type="text"
              placeholder="Chat here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input type="submit" onClick={handleSubmit} />
            {/* <AiOutlineSend /> */}

            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
