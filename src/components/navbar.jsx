import React, { Component } from "react";

class Navbar extends Component {
  scrollToProjects = () => {
    setTimeout(function() {
      window.scrollTo(0, 1450);
    }, 2);
  };

  scrollToAboutMe = () => {
    setTimeout(() => {
      window.scrollTo(0, 300);
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
                    src={
                      "https://media.licdn.com/dms/image/C4D03AQFR2MIHId3Pxg/profile-displayphoto-shrink_100_100/0?e=1550102400&v=beta&t=gTbA3I5HUZlbxxsS77Y2IhT7gl_4wGM5AXYgg1mT41Q"
                    }
                    alt="portfolio"
                  />
                </div>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={this.scrollToAboutMe}
                      href={"#"}
                    >
                      About Me
                      <span className="sr-only" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={this.scrollToProjects}
                      href={"#"}
                    >
                      | Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={this.scrollToHireMe}
                      href={"#"}
                    >
                      | Hire Me!
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
