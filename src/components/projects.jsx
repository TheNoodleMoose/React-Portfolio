import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="container projects-container">
        <div className="row">
          <div className="col-12">
            <div className="align-center">
              <p className="projects-title">Projects</p>
            </div>
            <p>For All My Projects Check Out My Github: </p>
            <a href="https://github.com/TheNoodleMoose" target="_blank">
              <img
                className="skillsImg"
                src={require("../assets/images/github.png")}
                alt=""
              />
            </a>
            <p>Here Is One Of My Favorite Projects:</p>
            <div className="projects-section">
              <p>
                Mark Me |
                <a
                  href="https://github.com/TheNoodleMoose/MarkMe"
                  target="_blank"
                >
                  Github
                </a>
                |
                <a
                  href="https://thenoodlemoose.github.io/MarkMe/"
                  target="_blank"
                >
                  Live Site
                </a>
              </p>
              <div className="projects-image">
                <img
                  className="markMeImage"
                  src={require("../assets/images/markMe.JPG")}
                  alt=""
                />
              </div>
              <p>Tools Used</p>
              <img
                className="web-lang-img"
                src={require("../assets/images/html5.png")}
                alt=""
              />
              <img
                className="web-lang-img"
                src={require("../assets/images/bootstrap-stack.png")}
                alt=""
              />
              <img
                className="web-lang-img"
                src={require("../assets/images/firebase-logo.png")}
                alt=""
              />
              <p>
                Using HTML5 Geolocation API, I created an app that tracks users
                locations in realtime, stores it in a firebase database and
                dynamically generates them on the map for others users to see. I
                created Mark Me with the hopes to make locating and hanging out
                with friends simpler and accessible to all. Whether you just
                want to see where someone is at, to contacting them to go out
                for lunch, Mark Me is the solution to these common, everyday
                problems.
              </p>
              <h4>Achivements</h4>
              <p>
                Mark Me Won An Award For Best Use Of Tech From UCF Coding
                Bootcamp
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
