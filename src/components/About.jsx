// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className=" py-28 bg-bg_sec text-white/95">
      <h2 className="sectionTitle text-4xl font-bold text-center">About Me</h2>
      <div className="container mx-auto px-4  flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-20">
        <img src="about.png" alt="About Me" width={450} />
        <p className="px-12">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus potenti libero praesent
          accumsan imperdiet. Sed aptent bibendum cras efficitur erat. Torquent nunc lorem nostra ac
          at dolor nisl. Risus magnis orci nostra conubia, ultricies fermentum curabitur sociosqu.
          Gravida posuere sollicitudin dapibus condimentum condimentum enim purus natoque. Sodales
          lorem egestas dolor cursus taciti nisl facilisi. Etiam montes nullam duis dignissim sit.
          Platea montes magna tempus fringilla ornare. Blandit dui consequat elementum ipsum netus
          commodo.
        </p>
      </div>
    </section>
  );
};

export default About;
