import React from "react";
import "./About.css";
import Cv from "../Image/Ahmed_Moharam CV.pdf";
import img from "../Image/mearn.png";
const About = ({ color }) => {
  return (
    <div id="about" className={` container-fluid py-5 my-5 ${color[1]}`}>
      <div className="row">
        <div className="col-md-6 ">
          <div className="about ps-3">
            <h3 className="para my-3 fw-bold">More About Me</h3>
            <p className="para ">
              I'm Ahmed Moharam, Frontend Developer.
              <br />
              I'm a Frontend Developer who can help your company to achieve more
              success and achievements in the software industry by building,
              debugging, and even deploying web applications.
              <br />
              I mainly work on Web Development with React JS & Node JS, with an
              interest in other programming languages ex: Java and more.
              <br />
              If you want to know more about me and my work, please check my CV.
              <br />
            </p>
            <a className="text-white" href={Cv} target="_blank">
              {" "}
              <button
                className={`btn1  ${
                  color[3] === "bg-white4"
                    ? color[3] + " text-white"
                    : color[3] + " text-white"
                }`}
              >
                {" "}
                View CV
              </button>
            </a>
            <a
              className="text-white"
              target="_blank"
              href="mailto:ahmedmoharam2002@gmail.com"
            >
              {" "}
              <button
                className={`btn1 ${
                  color[3] === "bg-white4"
                    ? color[3] + " text-white"
                    : color[3] + " text-white"
                }`}
              >
                Mail Me
              </button>
            </a>
            <hr className="hr" />
            <h3 className="para my-3 fw-bold">CORE PROFICIENCIES</h3>
            <div>
              <h6 className="text-center fs-4">Frontend Developer</h6>
              <div
                className={`p-3 d-flex ${
                  color[2] === undefined ? "bg-white3" : color[2]
                }`}
              >
                <ul>
                  <li>HTML/HTML5</li>
                  <li>CSS/CSS3</li>
                  <li>CSS Animations & UI Design</li>
                  <li>Responsive Design</li>
                  <li>Bootstrap</li>
                  <li>Tailwind Css</li>
                  <li>JavaScript</li>
                  <li>OOP/JavaSript</li>
                  <li>React.JS</li>
                  <li>React Hooks</li>
                  <li>Redux Toolkit</li>
                  <li>Sass</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div>
            <img src={img} className="img w-100" />
            <h1 className="text-mobile py-4"> Find me on Github & Linkedin</h1>
            <div className="py-3">
              <a
                target="_blank"
                className="portfolio_link"
                href="https://github.com/Ahmedmoharam22"
              >
                <i class="fa-brands fa-github"></i> GitHub: @Ahmedmoharam22
              </a>
              <br />
              <a
                target="_blank"
                className="portfolio_link"
                href="https://www.linkedin.com/in/ahmed-moharam-2b70a928b/"
              >
                {" "}
                <i class="fa-brands fa-linkedin"></i> Linkedin: @Ahmed Moharam
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
