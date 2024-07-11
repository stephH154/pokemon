import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log("hi");
  return (
    <>
      <nav className="bg-yellow-200 fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 shadow-md">
        <Link to="/" className="text-xl font-bold">
          Poke'Helper
        </Link>
        <div className="flex items-center">
          <Link to="/" className="mx-2 hover:text-gray-700">
            Type chart
          </Link>
          <Link to="/pokemondata" className="mx-2 hover:text-gray-700">
            Pokemon data
          </Link>
          <Link to="/pvp-calculator" className="mx-2 hover:text-gray-700">
            PvP calculator
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
