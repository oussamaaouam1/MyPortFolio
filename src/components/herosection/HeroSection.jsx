import './herosection.css'
import Lottie from "lottie-react";
import { useRandomAnimation } from './animation';
import { useRef } from 'react';


const HeroSection = () => {
  const lottieRef= useRef()
  const currentAnimation = useRandomAnimation(); // Use the custom hook to get the current animation
  return (
    <section className="hero flex justify-around items-center">
      <div className="left-section flex flex-col sm:flex-col ">   
        <div className="parent-avatar flex gap-2 items-end">
          <img
            src="/aaaaaaaaaaaaaaaa.png "
            className=" h-24 w-24 sm:w-28 sm:h-28 md:w-32 md:h-32 avatar"
            alt="personal-photo"
          />
          <span className="icon-verified text-blue-500"></span>
        </div>
        <h1 className="title mt-7 text-4xl font-bold w-2/3 leading-relaxed">
          Web designer and Front-end developer
        </h1>
        <p className="sub-title mt-8 w-2/3 text-xl">
          Hii!! , I&apos;m Oussama Aouam  ,a react front-end developer and web
          designer based in Casablanca ,Morocco ,Im a co-founder of <span className='text-2xl font-bold'>Pickcar</span>  
          {""} where we will provide a car renting services . 
        </p>
        <div className="icons flex flex-row gap-6 mt-10 icons">
          <a className="icon-twitter icons "></a>
          <div className="icon-instagram icons  "></div>
          <div className="icon-github icons "></div>
          <div className="icon-linkedin icons "></div>
        </div>
      </div>
      <section className="animation-section w-96 ">
        <Lottie
          lottieRef={lottieRef}//im using this code from lottie website to slow down the animation using useRef hook
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5)
          }
          }
          className="lottie-animation h-96 "
          animationData={currentAnimation}
          loop={true}
        />
      </section>
    </section>
  );
}

export default HeroSection
