import React from "react";

const Navbar = () => {
  const menuItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Resume", href: "#resume"},
    {name: "Projects", href: "#projects"},
  ];
  return (
    <nav className="fixed top-0 flex w-full justify-between py-6 px-10 items-center">
      <a className="text-white text-2xl k2d" href="/#hero">JD Torres</a>
      <ul className="flex gap-5 text-white/80">
        {menuItems.map((item, i) => (
          <li key={`${item}-${i}`}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button className="btn-pri text-white font-light">
        <a href="#contact">Contact Me</a>
      </button>
    </nav>
  );
};

export default Navbar;
