import "./header.css";
import { useState } from "react";

const Header = () => {
  const [showmenu, setshowmenu] = useState(false);
  setshowmenu
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
      <button className="mode flex">
        <span className="icon-moon-o "></span>
        {/* <span className="icon-sun"></span> */}
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
