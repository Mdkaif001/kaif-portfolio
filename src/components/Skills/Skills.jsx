import React from "react";
import Frontend from "./Frontend";
import "./skills.css"

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section_title" style={{ textAlign: "center" }}>
          Skills
        </h2>
        <div className="section_subtitle" style={{ textAlign: "center" }}>
          My technical level
        </div>

        <div className="skills_container container " style={{display:"flex",justifyContent:"center"}}>
          <Frontend/>
        </div>
      </section>
    </>
  );
};

export default Skills;
