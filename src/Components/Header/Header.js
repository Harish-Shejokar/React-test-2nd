import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  const buttonHanler = () => {
    console.log("working");
  };

  return (
    <>
      <header className={classes.header}>
        <h1>H-Mart</h1>
        <button className={classes.btn} onClick={buttonHanler}>
          Cart
        </button>
      </header>
    </>
  );
};

export default Header;
