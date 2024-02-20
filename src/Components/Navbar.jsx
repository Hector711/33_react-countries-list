import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav className="w-full p-4 fixed top-0 left-0 z-10 ">
      <div className="flex gap-20 px-3 justify-center">
        <Link to="/" className="nav-li">
          Home
        </Link>
        <Link className="nav-li" to="/countries">
          Countries List
        </Link>
        <Link className="nav-li" to="/search">
          Buscador
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
