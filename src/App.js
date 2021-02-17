import React from "react";
import "./styles/index.scss";

import Header from "./components/header/Header";
import TechnologiesBar from "./components/technologiesBar/TechnologiesBar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <TechnologiesBar />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
