import React, { Component } from "react";

class Introduction extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <p className="introduction-text">
              My Name Is <strong>Christian Huffman</strong>
              <br /> I Am A Full Stack Web Developer Specializing in the M.E.R.N
              Stack.
            </p>
            <img
              className="mern-stack-img"
              src={require("../assets/images/mern-stack.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
