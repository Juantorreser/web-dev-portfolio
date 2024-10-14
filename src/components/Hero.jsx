// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center flex-col w-full bg-bg">
      <div className="text-center k2d h-[80%] flex justify-center items-center flex-col-reverse lg:flex-row">
        <div className="left text-white">
          <h1 className="text-xl opacity-70 font-light">Hi, my name is</h1>
          <h2 className="text-5xl mt-4 font-semibold">JD TORRES</h2>
          <h3 className="text-4xl mt-6 text-border font-black">Frontend Developer</h3>
          <button className="mt-8 px-6 py-3 bg-pri rounded-lg shadow-md hover:opacity-75 transition">
            Learn More
          </button>
        </div>
        <div className="right">
          <img src="/hero.png" alt="" width={500} />
        </div>
      </div>
      <div className="heroDivider h-[21%] w-full bottom-0 absolute flex justify-end">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="glow-effect">
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"
            fill="#201d26"
            fill-opacity="1"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
