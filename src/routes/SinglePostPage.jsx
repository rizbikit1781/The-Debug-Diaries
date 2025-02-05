import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="hidden lg:block w-2/5">
          <Image
            path="feature1.webp"
            className="rounded-2xl object-cover"
            width={600}
          />
        </div>
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            reprehenderit cumque?
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-[#4CAF50] font-semibold">
              Paradon Meeanan
            </Link>
            <span>on</span>
            <Link className="text-[#4CAF50] font-semibold">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            quas, veritatis velit totam alias autem nesciunt quaerat quisquam
            deleniti ipsam voluptatum quidem exercitationem, est voluptates
            eaque voluptate modi? Recusandae, fugiat.
          </p>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              path="default-image.jpg"
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <Link>Paradon Meeanan</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="/facebook.svg"/>
              </Link>
              <Link>
                <Image />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
