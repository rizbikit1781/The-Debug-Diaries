import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image path="feature1.webp" className="rounded-2xl object-cover" width={735}/>
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, esse porro!
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-[#4CAF50] font-semibold">John Doe</Link>
          <span>on</span>
          <Link className="text-[#4CAF50] font-semibold">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          fugiat in nesciunt voluptate dolore porro commodi possimus iure iste
          ex magni, voluptates asperiores voluptatum obcaecati assumenda cumque.
          Mollitia, esse voluptatum!
        </p>
        <Link to="/test" className="underline text-[#4CAF50] text-sm">Readmore</Link>
      </div>
    </div>
  );
};

export default PostListItem;
