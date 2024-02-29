import React from "react";
import { NavLink } from "react-router-dom";
import cssClasses from "./MainNav.module.css";
const MainNavigation = () => {
  return (
    <header className={cssClasses.header}>
      <nav>
        <ul className={cssClasses.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? cssClasses.active : undefined
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? cssClasses.active : undefined
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
