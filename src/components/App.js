import React from 'react';
import "../styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Content from "./Content.js";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="information" element={<Content page="information" />}></Route>
          <Route path="scenary" element={<Content page="scenary" />}></Route>
          <Route path="activity" element={<Content page="activity" />}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
