/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
const MobileNavLinks = ({ setToggle, href, title }) => {
  return (
    <>
      <li className="list-none cursor-pointer mr-8 mt-2">
        <Link
          href={href}
          className="font-normal font-roboto transition-all duration-300 ml-6"
          onClick={(prev) => setToggle(!prev)}
        >
          {title}
        </Link>
      </li>
    </>
  );
};

export default MobileNavLinks;
