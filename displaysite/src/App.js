import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Students from "./components/pages/Students/StudentsPage";
import Faculty from "./components/pages/Faculty/FacultyPage";
import About from "./components/pages/About/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
