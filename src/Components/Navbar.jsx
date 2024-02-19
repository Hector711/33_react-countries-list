import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Navbar() {
  return (
    <nav className="w-full p-4 fixed top-0 left-0 z-10 ">
      <ul className="flex gap-20 px-3 flex justify-center">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/countries"> Countries List</Link>
        </li>
        <li className="nav-li">
          <Link to="/country:id"> Country</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
