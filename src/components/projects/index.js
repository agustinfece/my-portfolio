import React from "react";
import projects from "./projects";

const Projects = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Highlighted Projects</h2>
      <span className="section__subtitle"></span>
      <div className="about__container container grid">
        {Object.values(projects).map(({ name, text }) => (
          <div className="about__data">
            <strong>{name}</strong>
            <p className="about__description">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
