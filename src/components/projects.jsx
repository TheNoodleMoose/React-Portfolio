import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="container projects-container">
        <div className="row">
          <div className="col-12 project-box">
            <div className="align-center">
              <p className="projects-title">Projects</p>
            </div>
            <p>For All My Projects Check Out My Github: </p>
            <a href="https://github.com/TheNoodleMoose">
              <img
                src={require("../assets/images/project-github.svg")}
                alt={".."}
              />
            </a>
            <p>Here is Some of My Work:</p>
            <div className="projects-section">
              <div class="card">
                <img
                  src={require("../assets/images/moviefy.JPG")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body project-card">
                  <h5 class="card-title">Moviefy</h5>
                  <p class="card-text">
                    Moviefy is a simple movie database site created fully in
                    React.js. Utilizing The Movie Database API, I was able to
                    create a fully searchable site for the movie of your choice.
                    My main focus was to practice creating clean, reuseable, and
                    scaleable components in React.
                  </p>
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/react.png")}
                    alt=""
                  />
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/nodejslogo.png")}
                    alt=""
                  />
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/JavaScript-logo.png")}
                    alt=""
                  />
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/styled-components.png")}
                    alt=""
                  />
                  <br />
                  <a
                    href="https://github.com/TheNoodleMoose/Moviefy"
                    class="btn btn-project">
                    Go To Github Repo
                  </a>
                  <a
                    href="https://thenoodlemoose.github.io/Moviefy/"
                    class="btn btn-project">
                    Go To Live Site
                  </a>
                </div>
              </div>
              <br />
              <div class="card">
                <img
                  src={require("../assets/images/TasteTourLoginPage.JPG")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body project-card">
                  <h5 class="card-title">TasteTour</h5>
                  <p class="card-text">
                    Utilizing Vue.js, Express.js, Node.js, and Sequelize, Me and
                    my team created a site where users can search for local food
                    places in the city of their choice. We then dynamically
                    create a generated route of the top 5 best restaurants
                    meeting the users queries. We created MySQL Databases, with
                    secure and encrypted user sign in and authentication. Our
                    site then uses geolocation and geofencing to determine user's
                    position and distances from the restaurants. Taste Tour is
                    your guide to hidden flavours without the headache. Explore
                    new cuisine with personalised tours that don’t break the
                    bank!
                  </p>
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/vue.png")}
                    alt=""
                  />
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/nodejslogo.png")}
                    alt=""
                  />
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/JavaScript-logo.png")}
                    alt=""
                  />
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/bootstrap-stack.png")}
                    alt=""
                  />
                  <br />
                  <a
                    href="https://github.com/burkeri/Crawl"
                    class="btn btn-project">
                    Go To Github Repo
                  </a>
                  <a
                    href="https://glacial-harbor-18764.herokuapp.com/#/"
                    class="btn btn-project">
                    Go To Live Site
                  </a>
                </div>
              </div>
              <br />
              <div class="card">
                <img
                  src={require("../assets/images/markMe.JPG")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body project-card">
                  <h5 class="card-title">MarkMe</h5>
                  <p class="card-text">
                    Using HTML5 Geolocation API, I created an app that tracks
                    users locations in realtime, stores it in a firebase
                    database and dynamically generates them on the map for
                    others users to see. I created Mark Me with the hopes to
                    make locating and hanging out with friends simpler and
                    accessible to all. Whether you just want to see where
                    someone is at, to contacting them to go out for lunch, Mark
                    Me is the solution to these common, everyday problems.
                  </p>
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
                  <br />
                  <a
                    href="https://github.com/TheNoodleMoose/MarkMe"
                    class="btn btn-project">
                    Go To Github Repo
                  </a>
                  <a
                    href="https://thenoodlemoose.github.io/MarkMe/"
                    class="btn btn-project">
                    Go To Live Site
                  </a>
                </div>
              </div>
              <br />
              <div class="card">
                <img
                  src={require("../assets/images/GiphyRecreated.JPG")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body project-card">
                  <h5 class="card-title">Giphy Recreated</h5>
                  <p class="card-text">
                    Using The Giphy API, I tried to recreate the popular website
                    known as Giphy.
                  </p>
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
                    src={require("../assets/images/nodejslogo.png")}
                    alt=""
                  />
                  <img
                    className="web-lang-img"
                    src={require("../assets/images/JavaScript-logo.png")}
                    alt=""
                  />
                  <br />
                  <a
                    href="https://github.com/TheNoodleMoose/MarkMe"
                    class="btn btn-project">
                    Go To Github Repo
                  </a>
                  <a
                    href="https://thenoodlemoose.github.io/MarkMe/"
                    class="btn btn-project">
                    Go To Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
