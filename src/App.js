import React from "react";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

export default function App() {
  
  
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <NavBar />
    <About />
    <Projects />
    <Skills />
    <Contacts />
    </main>
  );
}
