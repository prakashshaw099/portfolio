import "./App.css";
import ExperenceAndEducation from "./components/ExperenceAndEducation";
import Footer from "./components/Footer";
import IntroSection from "./components/introSection/IntroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mt-[20px] mr-[100px] ml-[100px] relative">
      <Navbar />
      <IntroSection />

      <ExperenceAndEducation />
      <hr className="mb-6 opacity-[0.1]" />
      <Footer />
    </div>
  );
}

export default App;
