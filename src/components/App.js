import React from 'react';
import "../styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Content from "./Content.js";

function App() {
  return (
    <>
    <Router basename="https://michaelleedev.github.io/ExploreMars">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExploreMars" element={<Home />} />
        <Route path="/ExploreMars/information" element={<Content page="information" />}></Route>
        <Route path="/ExploreMars/scenary" element={<Content page="scenary" />}></Route>
        <Route path="/ExploreMars/activity" element={<Content page="activity" />}></Route>
      </Routes>
    </Router>
    </>

  );
}

export default App;
