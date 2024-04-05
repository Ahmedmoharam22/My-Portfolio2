import { useState } from "react";
import "./App.css";
import Home from "./Home.jsx/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
// import $ from 'jquery'
function App() {
  const [color, setColor] = useState(
    JSON.parse(localStorage.getItem("defaultColor"))
      ? JSON.parse(localStorage.getItem("defaultColor"))
      : ["bg-black", "bg-black1", "bg-black2", "bg-black3"]
  );
  console.log();
  const [scroll, setScroll] = useState(0);

  window.onscroll = function () {
    setScroll(scrollY);
  };
   

  return (
    <div
      className={`pt-5 ${
        color[0] === "bg-white1"
          ? "bg-white1 text-dark "
          : color[0] === undefined
          ? " bg-white1 text-dark "
          : color[0] + " text-white "
      }`}
    >
      <Home color={color} setColor={setColor} />
      <About color={color} />
      {/* Projects */}
      <Projects color={color} />
      <Contact color={color} />
      <a href="#home">
        {" "}
        <div
          className={` arrowUp position-fixed ${
            scroll >= 500 ? " d-flex" : "d-none"
          }`}
        >
          {/* <i className=" fa-solid fa-arrow-up"></i> */}
          <i className="fs-5 fa-solid fa-angle-left fa-rotate-90"></i>
        </div>
      </a>
    </div>
  );
}

export default App;
