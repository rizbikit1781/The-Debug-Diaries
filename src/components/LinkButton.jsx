import React from 'react'

const LinkButton = ({ href, children, isButton = false }) => {
  return (
    <a
      href={href}
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
    </a>
  );
};


export default LinkButton
