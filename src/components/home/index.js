import React from "react";
import "./styles.css";
import Social from "./social";
import Data from "./data";
import ScrollDown from "./scrolldown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
