import "./App.css";
import ExperenceAndEducation from "./components/ExperenceAndEducation";
import Footer from "./components/Footer";
import IntroSection from "./components/introSection/IntroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";

function App() {
  // const md = "mt-[20px] mr-[100px] ml-[100px]"
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
