import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav className="w-full p-4 fixed top-0 left-0 z-10 ">
      <div className="flex gap-20 px-3 justify-center">
        <Link to="/" className="nav-li">
          <h3>Home</h3>
        </Link>
        <Link className="nav-li" to="/countries">
          <h3> Countries List</h3>
        </Link>
        <Link className="nav-li" to="/search">
          <h3>Buscador</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
