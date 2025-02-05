import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturePosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image path="feature5.webp" className="rounded-3xl object-cover" width={895}/>
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-[#4CAF50] font-bold lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* Other Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* 2nd */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              path="feature6.webp"
              className="rounded-3xl object-cover w-full h-full"
              width={298}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* detail */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-[#4CAF50] font-bold lg:text-lg">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* 3rd */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        <div className="w-1/3 aspect-video">
            <Image
              path="feature7.webp"
              className="rounded-3xl object-cover w-full h-full"
              width={298}
            />
          </div>
          <div className="w-2/3">
            {/* detail */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">03.</h1>
              <Link className="text-[#4CAF50] font-bold lg:text-lg">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* 4th */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              path="feature4.webp"
              className="rounded-3xl object-cover w-full h-full"
              width={298}
            />
          </div>
          <div className="w-2/3">
            {/* detail */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">04.</h1>
              <Link className="text-[#4CAF50] font-bold lg:text-lg">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePosts;
