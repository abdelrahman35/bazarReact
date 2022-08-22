import React from "react";
import styles from "./DarkMood.module.css";

const DarkMood = () => {
  const darkMood = () => {
    document.documentElement.style.setProperty("--color1", "#000");
    document.documentElement.style.setProperty("--color2", "#fff");
    document.documentElement.style.setProperty("--color3", "#fff");
    document.documentElement.style.setProperty("--color4", "#fff");
  };
  return (
    <>
      <div className={`d-flex ${styles.DarkMood}`}>
        <button type="button" className="btn btn-light" onClick={darkMood}>
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
      </div>
    </>
  );
};

export default DarkMood;
