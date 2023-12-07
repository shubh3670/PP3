// AnimatedRoutes.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../Pages/Home';
import Skills from '../Pages/Skills';
import Brief from '../Pages/Brief';
import Project from '../Pages/Project';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Set the home page as the default page using the "index" property */}
        <Route path="/" element={<Home />} index />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Brief" element={<Brief />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
