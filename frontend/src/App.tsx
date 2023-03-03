import React, { useState, useEffect } from "react";
// import HomePage from './Pages/Home';
import AllRoutes from './Route/AllRoutes';
import {Link} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from "./Pages/HomePage";
import ModalHome from "./Components/ModalHome";
import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";

import { Route,Routes } from "react-router-dom";


function App() {
 
  return (
    <div className="App">
      {/* <ModalHome showModal={showModal} setShowModal={setShowModal}/> */}
      <AnimatePresence>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
