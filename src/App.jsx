// src/App.jsx
import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
