import React, { Component } from "react";

class Introduction extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <p className="introduction-text">
              My Name Is <strong>Christian Huffman</strong>
              <br />
              Full Stack Web Developer Specializing in the M.E.R.N Stack and
              Lover of All Things JavaScript.
            </p>
            <a
              href="https://credly.com/credit/16274100"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="mern-stack-img"
                src={require("../assets/images/certification.png")}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
