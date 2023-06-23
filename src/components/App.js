import "../styles/index.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home.js";
import Content from "./Content.js";
import Information from "./Information.js";
import Places from "./Scenary.js";
import Activity from "./Activity.js";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Content page="information" />}></Route>
        <Route path="/scenary" element={<Content page="scenary" />}></Route>
        <Route path="/activity" element={<Content page="activity" />}></Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
