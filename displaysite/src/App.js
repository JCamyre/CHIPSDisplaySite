import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

// If we have multiple paths I'll add routes

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
