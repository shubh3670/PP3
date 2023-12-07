import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const number=props.number;
  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex space-x-4">
        <li>
        <NavLink
  to="/home"
  className={`${
    number==="1" ? "text-red-500" : "text-white" }`}
>
  HOME
</NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={` ${
              number==="2" ? "text-red-500" : "text-white" }`}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={` ${
              number==="3" ? "text-red-500" : "text-white" }`}
          >
            PROJECT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/brief"
            className={` ${
              number==="4" ? "text-red-500" : "text-white" }`}
          >
            BRIEF
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
