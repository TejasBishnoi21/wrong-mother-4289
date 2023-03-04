import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import "./ModalHome.css"
import AnimatedText from './AnimatedText';
import { SimplePlayer } from './AudioFile';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "200px", 
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }


const ModalHome = ({showModal,setShowModal} ) => {
  const [replay, setReplay] = useState(true);
    return (
     
        <AnimatePresence mode='wait'>
          
         { showModal && (
            <motion.div className="backdrop"
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden">

              {/* <SimplePlayer/> */}

              <motion.div className="modal"
                variants={modal}>
                  <motion.div className="modal2">
                      {/* <motion.div></motion.div>
                      <motion.div></motion.div> */}
                      <motion.div className='buttonDiv'>
                      <AnimatedText text="Lets Go!" replay={replay} />
                        <Link to="/user">
                          <motion.button className='ButtonStart'>Start</motion.button>
                        </Link>
                      </motion.div>
                      
                </motion.div>
              </motion.div>
             
            </motion.div>
          )}
        </AnimatePresence>
       
      )
}

export default ModalHome