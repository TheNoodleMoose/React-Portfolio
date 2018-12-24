import React, { Component } from "react";

class Navbar extends Component {
  scrollToProjects = () => {
    setTimeout(function() {
      window.scrollTo(0, 1600);
    }, 2);
  };

  scrollToAboutMe = () => {
    setTimeout(() => {
      window.scrollTo(0, 350);
    }, 2);
  };

  scrollToHireMe = () => {
    setTimeout(() => {
      window.scrollTo(0, 2200);
    }, 2);
  };

  render() {
    return (
      <header className="headerNavbar">
        <div className="container navbar-container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand navbar-color">
                <div className="portfolio-border">
                  <img
                    className="navbar-brand portfolio-img"
                    src={require("../assets/images/my_pic.jpg")}
                    alt="portfolio"
                  />
                </div>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={"https://github.com/TheNoodleMoose"}
                    >
                      <img
                        className="navBar-img"
                        src={require("../assets/images/github.svg")}
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={
                        "https://www.linkedin.com/in/christian-huffman-5291ba165/"
                      }
                    >
                      <img
                        className="navBar-img"
                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={this.scrollToHireMe}
                      href={"#"}
                    >
                      <img
                        className="navBar-img"
                        src="https://img.icons8.com/color/48/000000/secured-letter.png"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
