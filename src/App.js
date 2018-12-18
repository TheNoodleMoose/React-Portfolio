import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import WhoAmI from "./components/WhoAmI";
import ToolsOfTrade from "./components/toolsOfTrade";
import WhatCanIDo from "./components/whatCanIDo";
import Projects from "./components/projects";
import HireMe from "./components/hireMe";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Introduction />
        <WhoAmI />
        <ToolsOfTrade />
        <WhatCanIDo />
        <Projects />
        <HireMe />
        <Footer />
      </div>
    );
  }
}

export default App;
