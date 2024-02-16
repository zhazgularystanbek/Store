import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <span>LOGO</span>
          <nav>
            <NavLink to="/">Menu</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
