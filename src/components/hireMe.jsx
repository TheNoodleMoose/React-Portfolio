import React, { Component } from "react";

class HireMe extends Component {
  render() {
    return (
      <div className="container hireMe-container">
        <div className="row">
          <div className="col-12">
            <div className="align-items">
              <p className="hireMe-title">Looking To Hire Someone Awesome?</p>
            </div>
            <p>
              <strong>Contact Me!</strong>
            </p>
            <p>
              <strong>
                <a href="mailto:cjh605@gmail.com">
                  <img
                    src={"https://img.icons8.com/color/48/000000/gmail.png"}
                    alt="email"
                  />
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HireMe;
