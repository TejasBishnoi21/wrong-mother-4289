import React, { useState, useEffect } from "react";
import BackgroundImage from "react-background-image";
import ModalHome from "../Components/ModalHome";

import placeholder from "../Images/KidsBig.png";
import hdImage from "../Images/KidsBig.png";
import "./Home.css";
// import audio from "../Images/bensound-moose.mp3";

// import ReactJkMusicPlayer from "react-jinke-music-player";

import "react-jinke-music-player/assets/index.css";

const HomePage = () => {
 const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowModal(true), 1000);
  }, [setShowModal]);


  return (
    <div className="main">
      
      <BackgroundImage
        placeholder={placeholder}
        src={hdImage}
        className="myCustomClass"
      >
        <div className="some-class">
          <h1>LET'S LEARN SOMETHING NEW WHILE PLAYING</h1>
        </div>
        <ModalHome showModal={showModal} setShowModal={setShowModal}/>
      </BackgroundImage>
    </div>
  );
};

export default HomePage;
