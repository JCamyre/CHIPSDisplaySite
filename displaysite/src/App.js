import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Students from "./components/pages/Students/StudentsPage";
import Faculty from "./components/pages/Faculty/FacultyPage";
import About from "./components/pages/About/AboutPage";
import PeoplePage from "./components/pages/PeoplePage/PeoplePage";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
