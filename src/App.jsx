import "./App.css";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalOpen = () => setModalIsOpen(true);

  const modalHandler = () => {
    return (
      <div
        className={`${
          modalIsOpen ? "" : "hidden"
        } fixed overflow-auto top-0 left-0 z-[99] w-[100%] h-[100%]  bg-[rgba(0,0,0,0.4)] flex justify-center items-center`}
      >
        <div
          className="w-[380px] h-[450px] lg:w-[500px] lg:h-[400px] bg-white rounded-4xl px-10 py-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end cursor-pointer">
            <RxCross2
              size={30}
              onClick={() => {
                setModalIsOpen(false);
              }}
              className="hover:scale-110 hover:duration-700"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[20px] font-semibold mb-4">Tic Tac Toe Game</h1>
            <p className="text-[14px] px-5 mb-2 lg:px-10 lg:mb-4">
              Designed a Tic-Tac-Toe Web App that allows users to play the
              classic game in an interactive and responsive interface.
              Implemented real-time move tracking and a dynamic game board that
              updates instantly.
            </p>
            <div className="mt-4 mb-7 grid grid-cols-5 gap-2.5 justify-center items-center">
              <div
                className="w-[30px] hover:scale-120 hover:duration-900"
                title="HTML"
              >
                <img src={`/assets/skillIcons/HTML.png`} />
              </div>
              <div
                className="w-[30px] hover:scale-120 hover:duration-900"
                title="CSS"
              >
                <img src={`/assets/skillIcons/CSS.png`} />
              </div>
              <div
                className="w-[30px] hover:scale-120 hover:duration-900"
                title="Javascript"
              >
                <img src={`/assets/skillIcons/Javascript.png`} />
              </div>
              <div
                className="w-[30px] hover:scale-120 hover:duration-900"
                title="React"
              >
                <img src={`/assets/skillIcons/React.png`} />
              </div>
              <div
                className="w-[30px] hover:scale-120 hover:duration-900"
                title="Tailwind"
              >
                <img src={`/assets/skillIcons/Tailwind.png`} />
              </div>
            </div>
            <div className="flex gap-2.5 justify-center items-center">
              <a href="https://tictactoe.stackninja.dev/">
                <div className="animate-btn">View Demo</div>
              </a>
              <a href="https://github.com/prakashshaw099/tic-tac-toe">
                <div className="animate-btn">Source Code</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {modalHandler()}
      <div className="relative md:max-w-[968px] md:mx-auto">
        <Navbar />
        <Home />
        <AboutMe />
        <Qualification />
        <Skills />
        <Portfolio modalOpen={modalOpen} />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
