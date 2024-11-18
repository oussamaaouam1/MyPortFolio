import "./header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [showmenu, setshowmenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")

  useEffect(() => {
    if (theme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.getElementById("dark").classList.add("icon-sun");
    document.getElementById("dark").classList.remove("icon-moon-o");
    
    
  
    } 
    else if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      document.getElementById("dark").classList.add("icon-moon-o");
      document.getElementById("dark").classList.remove("icon-sun");
    }

  }, [theme]);
  
  return (
    <header className="flex justify-around gap-2 items-center mt-6">
      <button
        onClick={() => {
          setshowmenu(true);
        }}
        className="menubtn icon-menu flex"
      ></button>
      <div></div>
      <nav className="">
        <ul className="flex flex-row gap-4 pt-px">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>
      <button 
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
          localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
          
        } else {
          setTheme("light");
          localStorage.setItem(
            "currentMode",
            theme === "light" ? "dark" : "light"
          );
          
        }
        }
      }
      className="mode flex">
        <span id="dark" className="icon-moon-o "></span>
      </button>
      {showmenu && (
        <div className="popupmenu">
          <ul className="menu">
            <li>
              <button
                onClick={() => {
                  setshowmenu(false);
                }}
                className="icon-close"
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
