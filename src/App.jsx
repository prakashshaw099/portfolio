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
          className=" w-[500px] h-[400px] bg-white rounded-4xl px-10 py-10"
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
          <div>
            <h1>Hello world</h1>
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
