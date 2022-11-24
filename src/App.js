import React, { useContext } from 'react';

import { getAuth } from 'firebase/auth';
import { motion } from 'framer-motion';
// import cursor context
import { CursorContext } from './context/CursorContext';
// import router
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import app from './firebase/firebase.config';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const auth = getAuth(app)

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <RouterProvider router={router}>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      ></motion.div>
      </RouterProvider>
      <ToastContainer />
    </>
  );
};

export default App;
