import React from "react";
import "./skills.css"

const Frontend = () => {
  return (
    <> 
      <div className="skills_content">
        <h3 className="skills_title">Frontend Developer</h3>
          <div className="skills_box">
            <div className="skills_group">
              <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i> 
                <div>
                  <h3 className="skills_name">HTML:5</h3>
                  <span className="skills_level">Basic</span>
                  <div className="line">
                    <p className="width"></p>
                  </div>
                </div>
              </div>

              <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i> 
                <div>
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_level">Advanced</span>
                  <div className="line">
                    <p className="width css"></p>
                  </div>
                </div>
              </div>

              <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i> 
                <div>
                  <h3 className="skills_name">  Bootstrap </h3>
                  <span className="skills_level">Intermediate</span>
                  <div className="line">
                    <p className="width bootstrap"></p>
                  </div>
                </div>
              </div>
              <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i> 
                <div>
                  <h3 className="skills_name">  Tailwind CSS </h3>
                  <span className="skills_level">Intermediate</span>
                  <div className="line">
                    <p className="width bootstrap"></p>
                  </div>
                </div>
              </div>
            
            </div>

            <div className="skills_group">
              <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i> 
                <div>
                  <h3 className="skills_name">React</h3>
                  <span className="skills_level">Intermediate</span>
                  <div className="line">
                    <p className="width react "></p>
                  </div>
                </div>
              </div>
              <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i> 
                <div>
                  <h3 className="skills_name">Next.js</h3>
                  <span className="skills_level">Intermediate</span>
                  <div className="line">
                    <p className="width react "></p>
                  </div>
                </div>
              </div>

              <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i> 
                <div>
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_level">Intermediate</span>
                  <div className="line">
                    <p className="width js"></p>
                  </div>
                </div>
              </div>

              <div className="skills_data">
              <i class="fa-solid fa-shield-halved"></i>     
                <div>
                  <h3 className="skills_name">Git</h3>
                  <span className="skills_level">Basic</span>
                  <div className="line">
                    <p className="width git"></p>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default Frontend;
