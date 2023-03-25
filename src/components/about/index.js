import React from "react";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            {/* 
            // TODO: render description medium/short depending on screen size 
            */}
            I am a full-stack software engineer with expertise in crafting
            compelling user experiences and designing innovative solutions that
            scale seamlessly. I am highly collaborative and dedicated to
            delivering solutions that meet the needs of clients and end-users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
