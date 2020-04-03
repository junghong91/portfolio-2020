import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "../Menu/Menubar";
import "../Header/Header";
// import Home from "../routes/Home";
// import About from "../routes/About";
// import Contact from "../routes/Contact";
// import ProjectExperience from "../routes/ProjectExperience";
import Menubar from "../Menu/Menubar";
import Header from "../Header/Header";
import Page from "../routes/Page";

function App() {
  const [page, setPage] = useState(0);
  const showPage = number => {
    setPage(number);
  };
  return (
    <Router>
      {/* <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={ProjectExperience} /> */}
      <Menubar showPage={showPage} />
      <Page page={page} />
    </Router>
  );
}

export default App;
