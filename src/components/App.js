import "../styles/index.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home.js";
import Information from "./Information.js";
import Places from "./Scenary.js";
import Activity from "./Activity.js";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />}></Route>
        <Route path="/scenary" element={<Places />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
