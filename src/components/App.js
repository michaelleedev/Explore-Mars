import React from 'react';
import "../styles/index.css";
import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import Home from "./Home.js";
import Content from "./Content.js";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Content page="information" />}></Route>
            <Route path="/scenary" element={<Content page="scenary" />}></Route>
            <Route path="/activity" element={<Content page="activity" />}></Route>
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
