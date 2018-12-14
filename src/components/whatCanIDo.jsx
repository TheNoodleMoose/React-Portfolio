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
              <img src={"https://via.placeholder.com/150"} alt="" />
              <p>
                My brain functions in a problem solving fashion. I can create
                solutions to your most complicated web development needs!
              </p>
            </div>
            <div className="align-center">
              <p className="whatCanIDo-title mt-2 mb-2">
                Design Great Looking Sites
              </p>
              <br />
              <img src={"https://via.placeholder.com/150"} alt="" />
              <p>
                I utilize React and Bootstrap to create modern looking sites
                with user friendly UI and site layouts!
              </p>
            </div>
            <div className="align-center">
              <p className="whatCanIDo-title mt-2 ">
                Develop Dynamic, Fast Web
              </p>
              <p className="whatCanIDo-title mt-2 ">
                Applications Using The Latest
              </p>
              <p className="whatCanIDo-title mt-2 mb-2">Technologies</p>
              <br />
              <img src={"https://via.placeholder.com/150"} alt="" />
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
