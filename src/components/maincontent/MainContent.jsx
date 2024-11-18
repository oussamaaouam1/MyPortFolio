import { useState } from "react";
import "./maincontent.css";
import myprojects from "./projectsData"; 



// const myprojects = [
//   {
//     projectTitle: "Currency Converter",
//     category: "react",
//     imgPath: "public/currency converter react.png",
//   },
//   {
//     projectTitle: "Headphones",
//     category: "htmlcss",
//     imgPath: "public/headphones HTML&CSS.png",
//   },
//   {
//     projectTitle: "Landing Page",
//     category: "react",
//     imgPath: "public/landing page react.png",
//   },
//   {
//     projectTitle: "html&css project",
//     category: "htmlcss",
//     imgPath: "public/smileschool HTML&CSS UI.png",
//   },
//   {
//     projectTitle: "Expense Tracker",
//     category: "react",
//     imgPath: "public/expense tracker react.png",
//   },
//   {
//     projectTitle: "Dynamic to do list",
//     category: "javascript",
//     imgPath: "public/dynamic todo list.png",
//   },
// ];

const MainContent = () => {
  const [selected, setSelected] = useState("all");
  const [arr, setarr] = useState(myprojects);


//create a fun that can take btncategory and filter the array based on this category
const handleClick = (categoryButton) => {
  setSelected(categoryButton);
  const filteredProjects = myprojects.filter(
    (project) => project.category === categoryButton
  );

  setarr(filteredProjects)
}



  return (
    <main className="flex gap-5 items-start  ">
      <section className="left-section flex flex-col gap-4 pl-8">
        <button
          onClick={() => {
            setSelected("all");
            setarr(myprojects);
          }}
          className={selected === "all" ? "active " : "buttons"} //in case of active drop .active styles if not keep .buttons styles
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("htmlcss")// Filter for HTML & CSS
          }}
          className={selected === "htmlcss" ? "active " : "buttons"} //in case of active drop .active styles if not keep .buttons style
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
          handleClick("javascript")
          }}
          className={selected === "javascript" ? "active " : "buttons"} //in case of active drop .active styles if not keep .buttons style
        >
          java script
        </button>
        <button
          onClick={() => {
          handleClick("react")
          }}
          className={selected === "react" ? "active " : "buttons"} //in case of active drop .active styles if not keep .buttons style
        >
          React.js
        </button>
        <button
          onClick={() => {
            handleClick("figma")
          }}
          className={selected === "figma" ? "active " : "buttons"} //in case of active drop .active styles if not keep .buttons style
        >
          UI FIGMA
        </button>
      </section>

      <section className="right-section flex flex-wrap justify-center ">
        {arr.map((project, index) => {
          return (
            <article
              key={index}
              className="card border w-72 rounded-xl hover:border-blue-400 cursor-pointer m-8"
            >
              <img src={project.imgPath} alt="" className="rounded-xl" />
              <div className="box py-4 px-2">
                <h1 className="title text-white font-bold capitalized">{project.projectTitle}</h1>
                <p className="sub-title text-white text-sm py-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Amet, quas ut beatae fuga repudiandae adipisci, labore
                  laudantium debitis explicabo vero quisquam{" "}
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-4 ">
                    <div className=" icons icon-link pl-3" />
                    <div className=" icons icon-github" />
                  </div>

                  <a
                    href=""
                    className=" icons pr-4 text-center flex items-center"
                  >
                    more
                    <span className="icon-arrow-right ml-1  " />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default MainContent;
