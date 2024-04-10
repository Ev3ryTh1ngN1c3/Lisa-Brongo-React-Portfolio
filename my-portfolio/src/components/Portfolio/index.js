import React from "react";
import passwordGeneratorImage from "../../assets/small/Password Generator.png";
import professionalREADMEGeneratorImage from "../../assets/small/Professional-README-Generator.png";
import workdaySchedularImage from "../../assets/small/Work Day Scheduler.png";
import cuisineCompassImageImage from "../../assets/small/Cuisine Compass.png";
import noteTakerImageImage from "../../assets/small/Note Taker.png";
import taskWizImageImage from "../../assets/small/TaskWiz 5.png"; 
import WeatherDashboardImage from "../../assets/small/Weather Dashboard.jpg";
import HoriseonImage from "../../assets/small/Horiseon.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Course Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Ev3ryTh1ngN1c3/Horiseon">
                {" "}
                <img
                
                  src={HoriseonImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Horiseon</h4>
              <p>
              This challenge is an on-the-job ticket example, which means I begin with starter code 
              that needed to be modified. This challenge involved an important aspect of web development : 
              accessibility. A common task for front-end & junior developers, taking existing code 
              & refactor it (improve it without changing what it does) to meet a certain set of standards 
              or implement a new technology. In this exercise, a marketing agency has hired me to refactor 
              an existing site to make it more accessible.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Ev3ryTh1ngN1c3/Cuisine-Compass">
                {" "}
                <img
                  src={cuisineCompassImageImage}
                
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Cuisine-Compass"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Cuisine Compass</h4>
              <p>
              This project is my first opportunity to show employers my collaborative skills
              & coding abilities. Here is a demonstartion of what I can do 
              & an example of working collaboratively with other developers. 
              This deployed collaborative project is a recipe search engine for chefs
              powered by two third party APIs.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Ev3ryTh1ngN1c3/New-Note-Taker">
                {" "}
                <img
                  src={noteTakerImageImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="New-Note-Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
              The challenge for this  project was to create an application 
              that can be used to write & save notes. This application used an Express.js back end 
              and will save & retrieve note data from a JSON file.
              The application’s front end was already been created. 
              My job was to build the back end, connect the two & then deploy to Heroku.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Ev3ryTh1ngN1c3/Password-Generator">
                {" "}
                <img
                  src={passwordGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password-Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              This JavaScript challenge required me to create an application that an employer can use 
              to generate a random password based on criteria they've selected.
              This app runs in the browser & features updated HTML & CSS powered by JavaScript code. 
              It has a clean & polished user interface that is responsive, ensuring that it adapts 
              to multiple screen sizes. This password can include special characters.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Ev3ryTh1ngN1c3/Professional-README-Generator/">
                {" "}
                <img
                  src={professionalREADMEGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Professional-README-Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Professional README Generator</h4>
              <p>
              This task was to create a command-line application that dynamically generates a professional README
              file with a user's input using the Inquirer package to an external site.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/MarinaA01/taskwiz">
                {" "}
                <img
                  src={taskWizImageImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TaskWiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>TaskWiz</h4>
              <p>
              This is an interactive full-stack group project. The goal of this project was to create an 
              opportunity to show my collaborative skills & coding abilities. This project's requirements 
              was to create a real-world full-stack application.  This web developer to-do app is a comprehensive 
              & user-friendly application that allows users to efficiently manage their tasks & stay organized {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Ev3ryTh1ngN1c3/Work-Day-Scheduler">
                {" "}
                <img
                  src={workdaySchedularImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work-Day-Scheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Scheduler</h4>
              <p>
              This project created a simple calendar application that allows a user to save events 
              for each hour of a typical working day (9am–5pm).  The app runs in the browser & features 
              dynamically updated HTML & CSS powered by jQuery.  A problem solved was to use a Day.js.{" "}
              </p>
            </div>
          </div>
        </div>


        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Ev3ryTh1ngN1c3/Weather-Dashboard">
                {" "}
                <img
                 
  src={WeatherDashboardImage}
                  // src={WeatherDashboardImage}
                  // className="my-2"
                  style={{ width: "100%" }}
                  alt="WeatherDashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              The motivation for this project was to access data from a server-side API. 
              This project built a weather dashboard that will run in the browser 
              & feature updated HTML & CSS. This challenge is linked to an external site
              & retrieves weather data for varies cities. I also learned about API keys.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/David0864/Ink-Insights-">
                {" "}
                <img
                  src={Ink&InsightsImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Ink Insights"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Ink Insights</h4>
              <p>
              This interactive MERN Stack Application Book Club project is a collaborative effort that utilizes the MERN stack 
              (MongoDB, Express.js, React, Node.js) to create a web application focused on managing a virtual book club. 
              The project aims to provide users with a platform where they can discover, discuss,
              & track books they are interested in. {" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}



export default Portfolio;