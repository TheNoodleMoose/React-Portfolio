import React, { Component } from "react";

class WhatCanIDo extends Component {
  render() {
    return (
      <div className="container whatCanIDo-container text-center">
        <div className="row">
          <div className="col-12">
            <div className="align-center">
              <p className="whatCanIDo-title mt-2">What Can I Do?</p>
            </div>
            <div className="align-center">
              <p className="whatCanIDo-title mt-3">Develop Whatever You Need</p>
              <p className="whatCanIDo-title mb-2">And Solve Your Problem</p>
              <br />
              <img
                className="skillsImg"
                src={require("../assets/images/internet.png")}
                alt=""
              />
              <p>
                My brain functions in a problem solving fashion. I can create
                solutions to your most complicated web development needs!
              </p>
            </div>
            <div className="align-center">
              <p className="whatCanIDo-title mt-2 mb-2">
                Create and Design On The Front End
              </p>
              <br />
              <img
                className="skillsImg"
                src={require("../assets/images/web-design.png")}
                alt=""
              />
              <img
                className="skillsImg"
                src={require("../assets/images/thumbs-up.png")}
                alt=""
              />
              <img
                className="skillsImg"
                src={require("../assets/images/responsive.png")}
                alt=""
              />
              <p>
                I utilize React and Bootstrap to create modern looking and
                responsive sites with user friendly UI and site layouts!
              </p>
            </div>
            <div className="align-center">
              <p className="whatCanIDo-title mt-2 ">
                Deploy And Manage The Back End
              </p>
              <br />
              <img
                className="skillsImg"
                src={require("../assets/images/shield.png")}
                alt=""
              />
              <img
                className="skillsImg"
                src={require("../assets/images/server.png")}
                alt=""
              />
              <img
                className="skillsImg"
                src={require("../assets/images/database.png")}
                alt=""
              />
              <p>
                Utilizing the M.E.R.N Stack, I can create full-stack web
                applications. From static sites to applications with databases
                and complex requirements, I can handle them!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatCanIDo;
