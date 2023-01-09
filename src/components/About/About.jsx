import React from "react";
import "./about.css";
import AboutImg from "../About/kaif.jpg";
import Pdf from "./resume.pdf"
import Info from "./Info";
const About = () => {
  return (
    <section className="about section " id="about">
      <h2 className="section_title" style={{ textAlign: "center" }}>
        About Me
      </h2>
      <div className="section_subtitle" style={{ textAlign: "center" }}>
        My introduction
      </div>

      <div className="about_container container grid">
        <img src={AboutImg} alt="Profile" className="about_img" />
        <div className="about_data">
          <Info />

          <p className="about_description">
            Frontend developer , I create web pages with UI / UX user interface
            , I didn't have experience but i am able to build any UI
          </p>
          <a href={Pdf} className="button button--flex" target="_blank">
         
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
