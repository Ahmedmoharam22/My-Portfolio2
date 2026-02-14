import React, { useState } from "react";
import img1 from "../Image/movies.png";
import img2 from "../Image/yummy.png";
import img8 from "../Image/amazon-clone.png";
import img9 from "../Image/our-store.png";
import img10 from "../Image/shopping-cart.png";
import img5 from "../Image/food lover.png";
import img6 from "../Image/travel.png";
import img11 from "../Image/movies app.png";
import img12 from "../Image/gallery-JS.png";
import img13 from "../Image/sports-slider.png";
import img14 from "../Image/country-meals.png";
import img15 from "../Image/web-master.png";
import img16 from "../Image/cart-app.png";
import img17 from "../Image/Screenshot (63).png";
import img18 from "../Image/Screenshot (65).png";
import img19 from "../Image/islamic.png";
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
      category: "react",
      name: "El-Sayegh Website",
      img: img17,
      github: "https://github.com/Ahmedmoharam22/El-Sayegh-Website.git",
      url: "https://el-sayigh.webamz.com/",
      desc: "A full-stack institutional portal with a custom CMS and contest management system. Features secure document uploads, real-time Zod validation, and a dynamic dashboard for managing news, events, and results.",
    },
    {
      category: "react",
      name: "El-Noor Mediacal Website",
      img: img18,
      github: "https://github.com/Ahmedmoharam22/meddical-healthcare-platform.git",
      url: "https://meddical-healthcare-platform.vercel.app/",
      desc: "A high-performance Healthcare Platform featuring an Admin Dashboard, dynamic service management, and advanced state synchronization. Built with React Query and TypeScript for a type-safe, seamless medical experience.",
    },
    {
      category: "JS",
      name: "Gallery",
      img: img12,
      github: "https://github.com/Ahmedmoharam22/gallery_Js",
      url: "https://ahmedmoharam22.github.io/gallery_Js/",
      desc: "An Image Gallery built with HTML, CSS, JavaScript, and Bootstrap displays a collection of images in a responsive grid layout.",
    },
    {
      category: "JS",
      name: "Sports Slider",
      img: img13,
      github: "https://github.com/Ahmedmoharam22/Slider-Sports",
      url: "https://slider-sports.vercel.app/",
      desc: "A Sports Gallery built with HTML, CSS, JavaScript, and Bootstrap showcases sports images in a responsive grid layout. It features image enlargement on click and smooth filtering for an enhanced user experience.",
    },
    {
      category: "JS",
      name: "Country Meals",
      img: img14,
      github: "https://github.com/Ahmedmoharam22/Country-Meals",
      url: "https://country-meals.vercel.app/",
      desc: "Country Meals is a Single Page Application (SPA) built with HTML, CSS, JavaScript, Bootstrap, and an external API. providing an interactive and seamless experience.",
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
      category: "JS",
      name: "Web Masters Website",
      img: img15,
      github: "https://github.com/Ahmedmoharam22/Web_Masters-1-",
      url: "https://ahmedmoharam22.github.io/Web_Masters-1-/",
      desc: "Web Masters is a modern and responsive company website built with HTML, CSS, JavaScript, and Bootstrap. It showcases the company’s services, portfolio, and contact information with a clean and professional design.",
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
      name: "Our Store",
      img: img9,
      github: "https://github.com/Ahmedmoharam22/our-store",
      url: "https://our-store-git-main-ahmed-moharams-projects.vercel.app/",
      desc: "Our Store is a modern eCommerce platform built with React, React Bootstrap, and Redux Toolkit. It specializes in selling chairs, sofas, and electronics.",
    },
    ,
    {
      category: "react",
      name: "Islamic Website",
      img: img19,
      github: "https://github.com/Ahmedmoharam22/Islamic_project",
      url: "https://ahmedmoharam22.github.io/Islamic_project/",
      desc: " The Holy Qur’an website contains the complete Qur’an with the voices of all sheikhs and many languages",
    },
    {
      category: "react",
      name: "Amazon Clone",
      img: img8,
      github: "https://github.com/Ahmedmoharam22/Amazon_Clone",
      url: "https://amazon-clone-ruby-theta-14.vercel.app/",
      desc: "Amazon Clone is a feature-rich eCommerce web application built with React, TypeScript, Redux, Tailwind CSS, React Slick, and Axios. .",
    },
    {
      category: "react",
      name: "Basic Cart App",
      img: img16,
      github: "https://github.com/Ahmedmoharam22/Amazon_Clone",
      url: "https://amazon-clone-ruby-theta-14.vercel.app/",
      desc: "Basic Cart App is a simple shopping cart application built with React, Redux, and React Bootstrap. It was developed as a personal project to practice and understand state management using Redux.",
    },
    ,
    {
      category: "JS",
      name: "Shopping Cart",
      img: img10,
      github: "https://github.com/Ahmedmoharam22/Shopping-cart-pure-js",
      url: "https://shopping-cart-pure-js.vercel.app/",
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
                  <p className="text-project p-3  text-muted">{item.desc}</p>
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
