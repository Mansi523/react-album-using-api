import React from "react";
import { IoNotifications } from "react-icons/io5";
import { PiGooglePhotosLogoFill } from "react-icons/pi";
import style from "../Navbar/Navbar.module.css";
import { useState, useEffect } from "react";
const Navbar = ({ length, handleSearch, search, album, albumname }) => {
  const [suggestionDispay, setsuggestionDispay] = useState(false);
  // console.log(length);
  useEffect(() => {
    if (search.length > 0) {
      setsuggestionDispay(true);
    }
  }, [search]);

  let testvar = {};
  const test = () => {
    testvar = album.find((item) => item.id == albumname.id);
  };
  test();

  document.addEventListener("click", (e) => {
    if (e.target.id !== "suggestionbox" && e.target.id !== "inputValue") {
      setsuggestionDispay(false);
    }
  });

  return (
    <header>
      {/* left div */}
      <div className={style.left}>
        {/* this div is used for image tag */}
        <div className={style.imgIcon}>
          <div>
            <PiGooglePhotosLogoFill width={50} height={50} fontSize={40} />
          </div>
        </div>
        <div className={style.heading}>
          <span>Album</span>
        </div>
      </div>
      {/* right div */}
      <div className={style.right}>
        <div className={style.searchbar}>
          <input
            type="text"
            id="inputValue"
            onKeyUp={(e) => handleSearch(e)}
            placeholder="Search..."
          />
          {search.length > 0 && suggestionDispay && (
            <div id="suggestionbox" className={style.searchfilter}>
              <ul>
                {search.map((item, index) => (
                  <li className={style.searchindividual} key={index}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={style.notificationIcon}>
          <div className={style.count}>{length}</div>
          <div>
            <IoNotifications color="black" fontSize={35} id={style.bell} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
