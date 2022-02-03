import React from "react";
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/home/Home";
import Topbar from './components/Topbar';
import About from "./pages/about/About";
import Lessons from "./pages/lessons/Lessons";

const App = () => {
  return (
    <div>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="lessons" element={<Lessons />} />
      </Routes>
    </div>
  );
};
export default App;
