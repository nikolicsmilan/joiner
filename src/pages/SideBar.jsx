import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ setToggle }) => {
  return (
    <div
      className="text-white text-xl border-0 h-full opacity-100 p-10"
      onClick={() => {
        setToggle(false);
      }}
    >
      <div className="flex flex-col">
        <NavLink to="/"  className={({ isActive }) =>
              `${
                isActive ? "text-red-600" : "text-white"
              }  mr-4  hover:text-red-600 font-semibold text-lg uppercase`
            } >
          Főoldal
        </NavLink>{" "}
        <NavLink to="/galery" className={({ isActive }) =>
              `${
                isActive ? "text-red-600" : "text-white"
              }  mr-4  hover:text-red-600 font-semibold text-lg uppercase`
            }>
          Galéria
        </NavLink>
        <NavLink to="/login" className={({ isActive }) =>
              `${
                isActive ? "text-red-600" : "text-white"
              }  mr-4  hover:text-red-600 font-semibold text-lg uppercase`
            }>
          Bejelentkezés
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
//className={`text-white font-semibold text-lg uppercase` }