import { useEffect, useState } from "react";
import "./techslider.css";

const TechSlider = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    // Initial theme check
    const currentTheme = localStorage.getItem("currentMode");
    setTheme(currentTheme);

    // Create a MutationObserver to watch for body class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const bodyClass = document.body.className;
          setTheme(bodyClass.includes("light") ? "light" : "dark");
        }
      });
    });

    // Start observing the body element for class changes
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: "HTML5", icon: "/tech/html.png" },
    { name: "CSS3", icon: "/tech/css.png" },
    { name: "JavaScript", icon: "/tech/javascript.png" },
    { name: "React", icon: "/tech/react.png" },
    { name: "Next.js", icon: "/tech/nextjs.png" },
    { name: "Tailwind", icon: "/tech/tailwind.png" },
    { name: "Node.js", icon: "/tech/nodejs.png" },
    { name: "AWS", icon: "/tech/aws.png" },
    { name: "Figma", icon: "/tech/figma.png" },
    { name: "Git", icon: "/tech/git.png" },
  ];

  return (
    <div className={`tech-slider-container ${theme}`}>
      <div className="slider">
        <div className="slide-track">
          {/* Double the items for seamless loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div className="slide " key={index}>
              <div className="tech-card cursor-pointer">
                <img src={tech.icon} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSlider;
