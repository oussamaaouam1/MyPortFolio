import { useState, useEffect } from "react";
import animationOne from "../../../public/animations/animationOne.json";
import animationTwo from "../../../public/animations/animationTwo.json";
import animationThree from "../../../public/animations/animationThree.json";


const animations = [animationOne, animationTwo, animationThree,];
export const useRandomAnimation = () => {
  const [currentAnimation, setCurrentAnimation] = useState(animations[0]);

  useEffect(() => {
    const changeAnimation = () => {
      const randomIndex = Math.floor(Math.random() * animations.length);

      setCurrentAnimation(animations[randomIndex]);
    };
    const interval = setInterval(changeAnimation, 5000); // Change animation every 3 seconds
      return () => clearInterval(interval); // Cleanup on;
  }, []);
  return currentAnimation;
}

