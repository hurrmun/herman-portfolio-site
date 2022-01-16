import React from "react";

const Navbar = () => {
  const navItems = ["experience", "projects", "skills", "education", "contact"];

  const NavItem = (props) => {
    return (
      <li>
        <a
          href={`#${props.item}`}
          className="hover:bg-cyan-700 px-4 py-2 rounded-lg transition-all duration-100 hover:cursor-pointer"
        >
          {props.item}
        </a>
      </li>
    );
  };

  return (
    <nav className="fixed top-0 w-full">
      <div className="flex justify-between text-white px-10 py-5 items-center bg-cyan-800">
        <a href="#feature">
          <h2 className="text-3xl font-bold">HERMAN LOH</h2>
        </a>
        <ul className="flex space-x-2 text-lg lowercase font-thin">
          {navItems.map((el) => (
            <NavItem item={el} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
