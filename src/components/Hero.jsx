// src/components/Hero.jsx
import React from "react";
import {motion} from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.2,
        staggerChildren: 0.5, // Animates each child one after another
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
  };
  return (
    <section id="hero" className=" h-svh flex items-center justify-center flex-col w-full">
      <div className="text-center k2d h-[80%] gap-10 flex justify-center items-center flex-col-reverse lg:flex-row">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="left text-white">
          <motion.h1
            className="text-sm md:text-lg xl:text-2xl opacity-70 font-light"
            variants={itemVariants}>
            Hi, my name is
          </motion.h1>

          <motion.h2
            className="text-4xl lg:text-5xl xl:text-7xl mt-4 font-semibold"
            variants={itemVariants}>
            JD TORRES
          </motion.h2>

          <motion.h3
            className="text-xl xl:text-6xl mt-6 text-border font-black"
            variants={itemVariants}>
            Frontend Developer
          </motion.h3>

          <motion.button
            className="mt-8 px-6 py-3 bg-pri rounded-lg shadow-md hover:opacity-75 transition"
            whileHover={{scale: 1.05}} // Adds hover animation
            whileTap={{scale: 0.95}} // Adds tap animation
            variants={itemVariants}>
            <a href="#about">Learn More</a>
          </motion.button>
        </motion.div>
        <div className="right">
          <img
            src="/hero.png"
            alt="Hero Image"
            className="heroImage w-[250px] lg:w-[350px] xl:w-[650px]"
          />
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
            fill="#1f1c25"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
