import './maincontent.css'
const MainContent = () => {
  return (
    <main className="flex gap-5 items-start  ">
      <section className="left-section flex flex-col gap-4 pl-8">
        <button className="buttons">All Projects</button>
        <button className="buttons">HTML & CSS </button>
        <button className="buttons">java script</button>
        <button className="buttons">React.js</button>
        <button className="buttons">UI FIGMA</button>
      </section>

      <section className="right-section flex flex-wrap justify-center ">
        {["aa","bb", "cc","",""].map((item) => {
          return (
            <article key={item} className="card border w-72 rounded-xl hover:border-blue-400 cursor-pointer m-8">
              <img
                src="./public/landing page react.png"
                alt=""
                className="rounded-xl"
              />
              <div className="box py-4 px-2">
                <h1 className="text-white font-bold">Landing Page</h1>
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
        }
        )}
      </section>
    </main>
  );
}

export default MainContent
