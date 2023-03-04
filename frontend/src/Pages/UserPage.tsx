import React, { useState } from "react";
import BackgroundImage from "react-background-image";
import "./UserPage.css";
import btnImg from "../Images/btnImg.png";
import { useNavigate } from "react-router";

// interface players {
//   player1: String;
//   player2: String;
// }

const UserPage = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const navigate = useNavigate()

  const playFunc = () => {
    const players = { player1, player2 };
    console.log(players);
    
    localStorage.setItem("gamePlayers", JSON.stringify(players));
    navigate('/game')
    setPlayer1("");
    setPlayer2("");
  };

  return (
    <div className="user">
      <BackgroundImage
        placeholder="https://img.freepik.com/free-vector/battle-versus-vs-background-sports-game_1017-23766.jpg?w=900&t=st=1677843151~exp=1677843751~hmac=1916f15cc6e2ca1c50f17bd5dd4e086fe400b913ff2bca004b694f8d4e625844"
        src="https://img.freepik.com/free-vector/battle-versus-vs-background-sports-game_1017-23766.jpg?w=900&t=st=1677843151~exp=1677843751~hmac=1916f15cc6e2ca1c50f17bd5dd4e086fe400b913ff2bca004b694f8d4e625844"
        className="UserBackground"
      >
        <div className="userImg">
          <div className="userDiv">
            <div className="userDetail">
              <div className="userDetails">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "space-between",
                    alignContent: "center",
                    fontSize: "30px",
                    textAlign: "justify",
                  }}
                >
                  <p style={{ color: "white", fontWeight: "bold" }}>
                    {" "}
                    Player1{" "}
                  </p>
                  <input
                    className="input"
                    value={player1}
                    type="text"
                    placeholder="Player1 Name"
                    onChange={(e) => setPlayer1(e.target.value)}
                  />
                </div>
              </div>

              <div className="userDetails">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "space-between",
                    alignContent: "center",
                    fontSize: "30px",
                    textAlign: "justify",
                  }}
                >
                  <p style={{ color: "white", fontWeight: "bold" }}> Player2</p>
                  <input
                    className="input"
                    type="text"
                    value={player2}
                    placeholder="Player2 Name"
                    onChange={(e) => setPlayer2(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button onClick={() => playFunc()} className="buttonPlay">
              <img src={btnImg} alt="" />
            </button>
          </div>
          <div className="img">
            <img
              src="https://media0.giphy.com/media/QlrK8XOVZlNYrMM9b3/giphy.gif?cid=6c09b9527kv383vv9mc4zkgi4s6y8tqoviu2rqo2uhpujpwl&rid=giphy.gif&ct=s"
              alt=""
            />
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default UserPage;
