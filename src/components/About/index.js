import React from "react";
import profileImage from "../../assets/Profile/LinkedIn.png";
import './about.css';

const About = () => {
  return (
    <section id="about-me" className="about">
      {/* <div className=""> */}
        <h1 className="">About Me</h1>
      {/* </div> */}
      <div className="aboutDetails">
          <div className="aboutImg">
            <img src={profileImage}  alt="Profile" />
          </div>
          {/* <p>Lisa Brongo</p> */}
          <p>
            Dedicated Junior Web Developer <br />
            A student at UCF's Coding BootCamp <br />
            Experience in HTML, CSS & JavaScript <br />
            Seeking new technologies & staying up-to-date on trends in the industry
          </p>

      </div>
    </section>
  );
};

export default About;