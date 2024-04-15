import React, { useState } from "react";
import img1 from "../Image/movies.png";
import img2 from "../Image/yummy.png";
import img8 from "../Image/islamic.png";
import img9 from "../Image/shoppify.png";
import img10 from "../Image/project4.png";
import img5 from "../Image/food lover.png";
import img6 from "../Image/travel.png";
import img11 from "../Image/movies app.png";

const Projects = ({ color }) => {
  let projectAll = [
    {
      category: "JS",
      name: "Movies App",
      img: img1,
      github: "https://github.com/Ahmedmoharam22/Movies_App",
      url: "https://ahmedmoharam22.github.io/Movies_App/",
      desc: "A site that shows you the movies that topped the trend, find out every detail you want to know about the movie, know the directors, and many details ",
    },
    {
      category: "JS",
      name: "Resturant | Yummy  Website",
      img: img2,
      github: "https://github.com/Ahmedmoharam22/Yummy",
      url: "https://ahmedmoharam22.github.io/Yummy/",
      desc: "Yummy is a website can you buy and category of food with the easy bay methods .",
    },
    {
      category: "react",
      name: "Movies App | Noxe",
      img: img11,
      github: "https://github.com/Ahmedmoharam22/Movies_main",
      url: "https://movies-main-eight.vercel.app/",
      desc: "Our project is a user-friendly streaming platform for movies and TV series, offering a vast collection for users to browse through. They can easily add favorites to a personal watchlist",
    },
    {
      category: "react",
      name: "E-Commerce ShoppiFy",
      img: img9,
      github: "https://github.com/Ahmedmoharam22/ShppiFy",
      url: "https://shppify.vercel.app/",
      desc: "A site to buy anything online easily with all possible payment methods",
    },
    ,
    {
      category: "react",
      name: "Islamic Website",
      img: img8,
      github: "https://github.com/Ahmedmoharam22/Islamic_project",
      url: "https://ahmedmoharam22.github.io/Islamic_project/",
      desc: " The Holy Qur’an website contains the complete Qur’an with the voices of all sheikhs and many languages",
    },
    ,
    {
      category: "JS",
      name: "Shopping Cart",
      img: img10,
      github: "https://github.com/Ahmedmoharam22/shopping-cart-js",
      url: "https://ahmedmoharam22.github.io/shopping-cart-js/",
      desc: "Shop website with JavaScript shopping cart, favorite list, register and sign in with validate",
    },
    {
      category: "JS",
      name: "Resturant | Food Lover Website",
      img: img5,
      github: "https://github.com/Ahmedmoharam22/Food_Lover",
      url: "https://ahmedmoharam22.github.io/Food_Lover/",
      desc: " Food Website find out every detail you want to know about the movie, know the directors, and many details, and I have used React ",
    },
    {
      category: "JS",
      name: "Tourism Company Website",
      img: img6,
      github: "https://github.com/Ahmedmoharam22/Task3_bootstrap",
      url: "https://ahmedmoharam22.github.io/Task3_bootstrap/",
      desc: "A responsive website developed using Bootstrap,",
    },
  ];

  const [projects, setProjects] = useState(projectAll);
  function filterProject(cate) {
    let newProject = projectAll.filter((item) => item.category === cate);
    setProjects(newProject);
  }
  return (
    <div className="py-3" id="projects">
      <h1 className="text-mobile text-center py-3">
        Best Projects / Live Productions
      </h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="p-btn3">
              <button
                className={`btn3  ${
                  color[3] === "bg-white4"
                    ? color[3] + " text-white"
                    : color[3] + " text-white"
                }`}
                onClick={() => setProjects(projectAll)}
              >
                All Projects
              </button>

              <button
                className={`btn3  ${
                  color[3] === "bg-white4"
                    ? color[3] + " text-white"
                    : color[3] + " text-white"
                }`}
                onClick={() => {
                  filterProject("JS");
                }}
              >
                HTML / CSS / JAVASCRIPT
              </button>

              <button
                className={`btn3  ${
                  color[3] === "bg-white4"
                    ? color[3] + " text-white"
                    : color[3] + " text-white"
                }`}
                onClick={() => {
                  filterProject("react");
                }}
              >
                React
              </button>
            </div>
          </div>
          {projects.map((item, i) => {
            return (
              <div className="col-lg-4 col-md-6 project-me py-3" key={i}>
                <div className="project position-relative">
                  <img src={item.img} className="img-project w-100 " />
                  <div className="btn-projects">
                    <h6 className="fw-bold p-3 fs-5 text-black">{item.name}</h6>
                    <h6 className="fw-bold p-3 text-black fs-5">
                      <a
                        className="text-black p-2 btn-projects github "
                        href={item.github}
                        target="_blank"
                      >
                        Github <i className="px-2 fs-5 fa-brands fa-github"></i>{" "}
                      </a>
                    </h6>
                  </div>{" "}
                  <p className="text-project p-3 text-muted">{item.desc}</p>
                  <a target="_blank" href={item.url}>
                    {" "}
                    <button
                      className={`btn2 btn-project position-abs  ${
                        color[3] === "bg-white4"
                          ? color[3] + " text-white"
                          : color[3] + " text-white"
                      }`}
                    >
                      {" "}
                      Live Preview
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
