import React, { Component } from "react";

class Footer extends Component {
  scrollToAboutMe = () => {
    setTimeout(() => {
      window.scrollTo(0, 300);
    }, 2);
  };

  scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  };
  render() {
    return (
      <div className="container footer">
        <div className="row">
          <div className="col-12">
            <a onClick={this.scrollToTop} href="#">
              <p>
                <strong>Christian Huffman</strong>
              </p>
            </a>
            <a onClick={this.scrollToAboutMe} href="#">
              <p>
                <strong>About Me</strong>
              </p>
            </a>
            <a href="https://github.com/TheNoodleMoose">
              <p>
                <strong>Github</strong>
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
