import React, {useEffect, useState} from "react";
import clsx from "clsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Resume", href: "#resume"},
    {name: "Projects", href: "#projects"},
  ];

  useEffect(() => {
    //Modify navbar style if user scroll
    const checkIfScrolled = () => {
      const navbar = document.getElementById("navbar");
      addEventListener("scroll", () => {
        if (window.scrollY === 0 && !menuOpen) {
          navbar.style.backgroundColor = "transparent";
          navbar.style.boxShadow = "none";
        } else {
          navbar.style.backgroundColor = "#27232f";
          navbar.style.boxShadow = "0px 5px 10px rgba(0,0,0, 0.3)";
        }
      });
    };

    const checkIfOpen = () => {
      const navbar = document.getElementById("navbar");
      if (menuOpen) {
        navbar.style.backgroundColor = "#27232f";
      } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
      }
    };

    checkIfScrolled();
    checkIfOpen();
  }, [menuOpen]);

  return (
    <nav id="navbar" className="fixed top-0 flex w-full justify-between py-6 px-10 items-center">
      <a className="text-white text-2xl k2d" href="/#hero">
        JD Torres
      </a>
      {/* Desktop version */}
      <ul className="hidden md:flex gap-5 text-white/80">
        {menuItems.map((item, i) => (
          <li key={`${item}-${i}`}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button className="hidden md:block btn-pri text-white font-light">
        <a href="#contact">Contact Me</a>
      </button>

      {/* Mobile Version */}
      <div
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
        className={clsx("block md:hidden", {
          "menuOpen ": menuOpen === false,
          "menuClose ": menuOpen === true,
        })}
      />

      {menuOpen && (
        <>
          <ul className="mobileMenu flex flex-col justify-center items-center md:hidden gap-8 text-white/80 bg-bg absolute top-16 w-full left-0 py-10 z-10">
            {menuItems.map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="w-full py-2 text-2xl text-center"
                onClick={() => setMenuOpen(false)}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block md:hidden btn-pri text-white font-light w-44 text-center">
              Contact Me
            </a>
          </ul>
          <div className="backdrop md:hidden" onClick={() => setMenuOpen(false)}></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
