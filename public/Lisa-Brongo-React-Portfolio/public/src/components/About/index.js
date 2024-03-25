import React from "react";
import profileImage from "../../assets/Profile/LinkedIn.png";

const About = () => {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 className="section-title primary-border">About Me</h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="Profile" />
          </div>
          <p>Lisa Brongo</p>
          <p>
            Dedicated Junior Web Developer <br />
            A student at UCF's Coding BootCamp <br />
            Experience in HTML, CSS & JavaScript <br />
            Seeking new technologies & staying up-to-date on trends in the industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;