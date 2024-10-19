import React from "react";
import AboutCard from "./ui/AboutCard.jsx";

const About = () => {
  return (
    <section id="about" className=" py-28 bg-bg_sec text-white/95">
      <h2 className="sectionTitle text-4xl font-bold text-center">About Me</h2>
      <div className="mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-20 w-full py-8">
        {/* <img src="about.png" alt="About Me" width={450} /> */}
        <AboutCard className="w-3/4 md:w-3/5" />
        <p className=" w-3/4 mt-5 md:mt-0 md:w-2/5 ">
          I'm a Colombian web developer with a passion for creating clean, efficient, and visually
          appealing digital experiences. <br />
          <div className="w-full h-[2px] bg-bg my-2"></div>
          With a strong foundation in both front-end and back-end technologies, I thrive on solving
          complex problems and bringing creative ideas to life. <br />
          <div className="w-full h-[2px] bg-bg my-2"></div>
          Whether it's building a website for your brand or business, interactive web applications,
          or developing custom solutions, I approach every project with enthusiasm and a focus on
          quality. <br />
          <div className="w-full h-[2px] bg-bg my-2"></div>
          <span className=" font-semibold text-pri text-lg italic">
            Let’s Work Together!
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
