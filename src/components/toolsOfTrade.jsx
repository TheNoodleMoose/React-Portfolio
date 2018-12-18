import React, { Component } from "react";

class ToolsOfTrade extends Component {
  render() {
    return (
      <div className="container tools-container text-center pb-2">
        <div className="row">
          <div className="col-12">
            <div className="align-center mb-1">
              <p className="tools-title">My Tools Of Trade</p>
            </div>
            <img
              className="web-lang-img"
              src={require("../assets/images/mongodb-logo.png")}
              alt=""
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/expressjslogo.png")}
              alt=""
            />
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
              src={require("../assets/images/html5.png")}
              alt=""
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/css3.png")}
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
            <img
              className="web-lang-img"
              src={require("../assets/images/babel.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ToolsOfTrade;
