import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "../Menu/Menubar";
import Home from "../routes/Home";
import About from "../routes/About";
import Contact from "../routes/Contact";
import ProjectExperience from "../routes/ProjectExperience";
import Menubar from "../Menu/Menubar";

function App() {
  return (
    <Router>
      <Menubar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={ProjectExperience} />
    </Router>
  );
}

export default App;
