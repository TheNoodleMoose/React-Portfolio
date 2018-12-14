import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import WhoAmI from "./components/WhoAmI";
import ToolsOfTrade from "./components/toolsOfTrade";
import WhatCanIDo from "./components/whatCanIDo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Introduction />
        <WhoAmI />
        <ToolsOfTrade />
        <WhatCanIDo />
      </div>
    );
  }
}

export default App;
