import { useState } from "react";
import "./maincontent.css";




const myprojects = [
  { projectTitle: "react project", category: "react.js", imgPath: "a" },
  { projectTitle: "html&css project", category: "htmlcss", imgPath: "b" },
];

const MainContent = () => {
  const [selected, setSelected] = useState("all");
  const [arr, setarr] = useState(myprojects);

  return (
    <main className="flex gap-5 items-start  ">
      <section className="left-section flex flex-col gap-4 pl-8">
        <button
          onClick={() => {
            setSelected("all");
            setarr(myprojects);
          }}
          className={selected === "all" ? "active " : "buttons"}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            setSelected("htmlcss");

            const filteredProjects = myprojects.filter(
              (project) => project.category === "htmlcss"
            ); // Filter for HTML & CSS
            setarr(filteredProjects); // Set filtered projects array
          }}
          className={selected === "htmlcss" ? "active " : "buttons"}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setSelected("javascript");
          }}
          className={selected === "javascript" ? "active " : "buttons"}
        >
          java script
        </button>
        <button
          onClick={() => {
            setSelected("react");
          }}
          className={selected === "react" ? "active " : "buttons"}
        >
          React.js
        </button>
        <button
          onClick={() => {
            setSelected("figma");
          }}
          className={selected === "figma" ? "active " : "buttons"}
        >
          UI FIGMA
        </button>
      </section>

      <section className="right-section flex flex-wrap justify-center ">
        {arr.map((item, index) => {
          return (
            <article
              key={index}
              className="card border w-72 rounded-xl hover:border-blue-400 cursor-pointer m-8"
            >
              <img
                src={item.imgPath}
                alt=""
                className="rounded-xl"
              />
              <div className="box py-4 px-2">
                <h1 className="text-white font-bold">{item.projectTitle}</h1>
                <p className="text-white text-sm py-4">
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
