import React from "react";
import styles from "./DarkMode.module.css";
import { ChangeEventHandler } from "react";
// const setDark = () => {
//   // 2
//   localStorage.setItem("theme", "dark");

//   // 3
//   document.documentElement.setAttribute("--color1", "--color2");
// };

// const setLight = () => {
//   localStorage.setItem("theme", "light");
//   document.documentElement.setAttribute("--color2", "#011");
// };

// // 4
// const storedTheme = localStorage.getItem("theme");

// const prefersDark =
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;

// const defaultDark =
//   storedTheme === "dark" || (storedTheme === null && prefersDark);

// if (defaultDark) {
//   setDark();
// }

// 5
// const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
//   if (e.target.checked) {
//     setDark();
//   } else {
//     setLight();
//   }
// };

const DarkMode = () => {
  const dark = () => {
    document.documentElement.style.setProperty("--color2", "#413D38");
    document.documentElement.style.setProperty("--color1", "#74321F");
    document.documentElement.style.setProperty("--color12", "#201C1C");
    document.documentElement.style.setProperty("--color13", "white");
    document.documentElement.style.setProperty("--color7", "#74321F");
    document.documentElement.style.setProperty("--color6", "#fff;");
    document.documentElement.style.setProperty("--color3", "#2d2723;");
  };
  const light = () => {
    document.documentElement.style.setProperty("--color1", "#af492c");
    document.documentElement.style.setProperty("--color2", "#7a726a");
    document.documentElement.style.setProperty("--color12", "white");
    document.documentElement.style.setProperty("--color13", "#2d2723");
    document.documentElement.style.setProperty("--color7", "#e74518");
    document.documentElement.style.setProperty("--color6", "#fff;");
  };
  return (
    <div className={`${styles.togglethemewrapper}`}>
      <button className={`${styles.btnWarningg}`} onClick={light}>
        <span>☀️</span>
        {" Light "}
      </button>

      <button className={`${styles.btnWarningg1}`} onClick={dark}>
        <span>🌒</span>
        {" Dark"}
      </button>
    </div>
  );
};

export default DarkMode;
