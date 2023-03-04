import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import "./Game.css";

const Game = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

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
          <p>{count === 10 ? "You Won!" : ""}</p>
          <div>
            <div id="slider1">
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
            </div>
          </div>
          <div>
            <div id="slider1">
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
          <div>
            <p>Question</p>
          </div>
          <div>
            <input type="text" placeholder="Answer..." />
          </div>
          <div className="btn">
            <button>Submit</button>
          </div>
          <div className="team">
            <button>Player1</button>
            <button>Player2</button>
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
