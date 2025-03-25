import "./App.css";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative md:max-w-[968px] md:mx-auto">
      <Navbar />
      <Home />
      <AboutMe />
      <Qualification />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
