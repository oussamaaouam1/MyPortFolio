import './herosection.css'

const HeroSection = () => {
  return (
    <section className="hero flex">
      <div className="left-section flex flex-col sm:flex-col ">
        <div className="parent-avatar flex gap-2 items-end">
          <img
            src="./public/aaaaaaaaaaaaaaaa.png "
            className=" h-24 w-24 sm:w-28 sm:h-28 md:w-32 md:h-32 avatar"
            alt="personal-photo"
          />
          <span className="icon-verified text-blue-500"></span>
        </div>
        <h1 className="title mt-7 text-white text-4xl font-bold w-2/3 leading-relaxed">Web designer and Front-end developer</h1>
        <p className="sub-title mt-8 w-2/3 text-white text-xl">
          Hii , I&apos;m Oussama Aouam ,a react front-end developer and web
          designer based in Casablanca ,Morocco ,Im a co-founder of Pickcar{" "}
        </p>
        <div className="icons flex flex-row gap-4 mt-10">
          <a className="icon-twitter text-white"></a>
          <div className="icon-instagram text-white"></div>
          <div className="icon-github text-white"></div>
          <div className="icon-linkedin text-white"></div>
        </div>
      </div>
      <div className="right-section animation"></div>
    </section>
  );
}

export default HeroSection
