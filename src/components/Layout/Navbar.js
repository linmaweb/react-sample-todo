import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Using Basic Hooks</Link>
      <Link to="/context">Using Context</Link>
      <Link to="/reducer">Using Reducer</Link>
    </div>
  );
};

export default Navbar;
