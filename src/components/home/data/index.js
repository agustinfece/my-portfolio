import React from "react";
import { ReactComponent as Hello } from "../../../assets/send.svg";

import "../";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Agus 👋</h1>
      <h3 className="home__subtitle">Software Engineer 🇺🇾</h3>
      <p className="home__description">
        Hey, I'm Agustin! Love learning new things and living new experiences.
        Lets get in touch!
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <Hello />
      </a>
    </div>
  );
};

export default Data;
