import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
