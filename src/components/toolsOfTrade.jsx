import React, { Component } from "react";

class ToolsOfTrade extends Component {
  render() {
    return (
      <div className="container tools-container text-center">
        <div className="row">
          <div className="col-12">
            <div className="align-center mb-1">
              <p className="tools-title">My Tools Of Trade</p>
            </div>
            <img
              className="web-lang-img"
              src={require("../assets/images/mongodb-logo.png")}
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/expressjslogo.png")}
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/react.png")}
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/nodejslogo.png")}
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/html5.png")}
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/css3.png")}
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/JavaScript-logo.png")}
            />
            <img
              className="web-lang-img"
              src={require("../assets/images/bootstrap-stack.png")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ToolsOfTrade;
