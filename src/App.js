import React from "react";
import "./styles/index.scss";

import Header from "./components/header/Header";
import TechnologiesBar from "./components/technologiesBar/TechnologiesBar";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <Header />
      <TechnologiesBar />
      <Projects />
    </>
  );
};

export default App;
