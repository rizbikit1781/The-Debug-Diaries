import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center gap-8">
      {/* link */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-[#4CAF50] text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-[#4CAF50] hover:text-white rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-[#4CAF50] hover:text-white rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=search-engines"
          className="hover:bg-[#4CAF50] hover:text-white rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-[#4CAF50] hover:text-white rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="gray"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
        <input type="text" placeholder="search a post..." className="bg-transparent"/>
      </div>
    </div>
  );
};

export default MainCategories;
