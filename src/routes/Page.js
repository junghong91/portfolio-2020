import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProjectExperience from "./ProjectExperience";

const Page = props => {
  const displayPages = pgNum => {
    switch (pgNum) {
      case 0:
        return <Home />;
      case 1:
        return <About />;
      case 2:
        return <Contact />;
      case 3:
        return <ProjectExperience />;
      default:
        return <Home />;
    }
  };
  return <div>{displayPages(props.page)}</div>;
};

export default Page;
