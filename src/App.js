import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
