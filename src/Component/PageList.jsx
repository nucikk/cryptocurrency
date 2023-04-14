import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
const PageList = () => {
  const navRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Concept", path: "/" },
    { name: "Our Story", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Contact", path: "/" },
  ];
  return (
    <>
      <div className="navbar_links" ref={navRef}>
        <ul className="navbar_ul">
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PageList;