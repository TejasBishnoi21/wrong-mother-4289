import React, { useEffect, useState } from "react";
import { MathQuestion } from "../Components/MathQuestion";
import "./Game.css";
import "./glowBtn.css"

const players = JSON.parse(localStorage.getItem("gamePlayers") || '{}');


const Game = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [chance, setChance] = useState(false);
  const [p1, setP1] = useState('')
  const [p2, setP2] = useState('')

  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  console.log(players);
  

  const handleChance=()=>{
    setChance(!chance)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValue(text);
    setText("");
  };

  useEffect(()=>{
    setP1(players.player1)
    setP2(players.player2)

  },[p1,p2, players])

  return (
    <div className="bground">
      <p className="button-85">MathRun | Learn and Fun</p>
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

              <br />
              <button 
              className="moveBtn"
              onClick={()=> setCount(prev=>prev+1)}
              disabled={count>=10 || chance===false}>
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
              <br />
              <button
              className="moveBtn"
              onClick={()=> setCount2(prev=>prev+1)}
              disabled={count2>=10 || chance===true}>
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
            <p>{count===10?`${players.player1 || `user1`} Won the game`:""}</p>
            <p>{count2===10?`${players.player2 || `user2`} Won the game`:""}</p>
          </div>
          <div className="questionBox">
            <p>
              <MathQuestion />
            </p>
          </div>
          
          {/* <div className="team">
            <button 
            disabled={true}
            onClick={()=>handleChance}>
              Player1</button>
            <button 
            disabled={chance===false}
            onClick={()=>handleChance}>
              Player2</button>
          </div> */}

          <div className="playersButtonBox">
            <button 
            className="playerBtn"
            onClick={()=> {
              setChance(!chance)

            }}
            disabled={chance===true}>
              {p1}
            </button>
            <button
            className="playerBtn"
            onClick={()=> setChance(!chance)}
            disabled={chance===false}>
              {p2}
            </button>
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
              onChange={(e) => setText(e.target.value)}/>

            <input type="submit" onClick={handleSubmit} />
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
