import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Students from "./components/pages/Students/Students";

// If we have multiple paths I'll add routes

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
