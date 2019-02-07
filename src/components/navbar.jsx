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
      window.scrollTo(0, 5000);
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
                        alt="github"
                      />
                    </a>
                    GitHub
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={
                        "https://docs.google.com/document/d/1XNDXo-0UiosXcMtu6YRW6rEIWa2u9qHhitbZTANtW5o/edit?usp=sharing"
                      }
                    >
                      <img
                        className="navBar-img"
                        src={require("../assets/images/resume.png")}
                        alt="resume"
                      />
                    </a>
                    Resume
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
                        alt="linkedin"
                      />
                    </a>
                    LinkedIn
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={"mailto:cjh605@gmail.com"}>
                      <img
                        className="navBar-img"
                        src="https://img.icons8.com/color/48/000000/secured-letter.png"
                        alt="email"
                      />
                    </a>
                    Email Me
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
