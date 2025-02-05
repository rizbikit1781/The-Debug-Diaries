import React from 'react'
import { Link } from 'react-router-dom';

const LinkButton = ({ to, children, isButton = false }) => {
  return (
    <Link
      to={to}
      className={`hover:bg-[#4CAF50] hover:py-2 hover:px-4 hover:rounded-3xl hover:text-white ${
        isButton ? "" : "py-2 px-4"
      }`}
    >
      {isButton ? (
        <button className="py-2 px-4 rounded-3xl bg-[#4CAF50] text-white">
          {children}
        </button>
      ) : (
        children
      )}
    </Link>
  );
};


export default LinkButton
