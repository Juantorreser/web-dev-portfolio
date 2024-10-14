// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="font-sans">
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
