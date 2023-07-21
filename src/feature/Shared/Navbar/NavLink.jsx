/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
const NavLink = ({ href, title }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        href={href}     
        className="font-normal font-roboto transition-all duration-300"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
