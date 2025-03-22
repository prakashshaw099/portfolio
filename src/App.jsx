import "./App.css";
import IntroSection from "./components/introSection/IntroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mt-[20px] mr-[100px] ml-[100px]">
      <Navbar />
      <IntroSection />
    </div>
  );
}

export default App;
