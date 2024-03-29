import React from "react";
import profileImage from "../../files/Profile Pic/Profile_Pic.png";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            hi ~ I'm Lisa Brongo
          </p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default About;