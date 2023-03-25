import React from "react";
import { ReactComponent as Hello } from "../../../assets/send.svg";

import "../";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Agus 👋</h1>
      <h3 className="home__subtitle">Software Engineer 🇺🇾</h3>
      <p className="home__description">
        Hello there! I've a strong passion for continuous learning and exploring
        new experiences. Let's connect and discover new opportunities together!
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <Hello />
      </a>
    </div>
  );
};

export default Data;
