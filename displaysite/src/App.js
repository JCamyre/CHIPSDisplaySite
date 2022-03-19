import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Students from "./components/pages/Students/StudentsPage";
import Faculty from "./components/pages/Faculty/FacultyPage";
import About from "./components/pages/About/AboutPage";
import PeoplePage from "./components/pages/PeoplePage/PeoplePage";
import Videos from "./components/pages/Videos/Videos";
import News from "./components/pages/News/News";
import Posters from "./components/pages/Posters/Posters";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/posters" element={<Posters />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
