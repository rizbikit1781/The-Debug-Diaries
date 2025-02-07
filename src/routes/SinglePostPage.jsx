import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 mt-10">
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
            vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dolores ab ducimus, officia quis cum beatae fugiat
            eius quos dolorum, sint nihil accusamus dolor animi exercitationem
            assumenda pariatur. Voluptate, aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dolores ab ducimus, officia quis cum beatae fugiat
            eius quos dolorum, sint nihil accusamus dolor animi exercitationem
            assumenda pariatur. Voluptate, aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dolores ab ducimus, officia quis cum beatae fugiat
            eius quos dolorum, sint nihil accusamus dolor animi exercitationem
            assumenda pariatur. Voluptate, aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dolores ab ducimus, officia quis cum beatae fugiat
            eius quos dolorum, sint nihil accusamus dolor animi exercitationem
            assumenda pariatur. Voluptate, aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dolores ab ducimus, officia quis cum beatae fugiat
            eius quos dolorum, sint nihil accusamus dolor animi exercitationem
            assumenda pariatur. Voluptate, aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dolores ab ducimus, officia quis cum beatae fugiat
            eius quos dolorum, sint nihil accusamus dolor animi exercitationem
            assumenda pariatur. Voluptate, aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dolores ab ducimus, officia quis cum beatae fugiat
            eius quos dolorum, sint nihil accusamus dolor animi exercitationem
            assumenda pariatur. Voluptate, aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            explicabo esse, facilis minus laudantium officiis hic quam a alias
            eligendi minima deserunt aperiam eaque quos eos voluptas, corrupti
            vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit dolores ab ducimus, officia quis cum beatae fugiat
            eius quos dolorum, sint nihil accusamus dolor animi exercitationem
            assumenda pariatur. Voluptate, aliquid?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            
            <div className="flex items-center gap-8">
              <Image
                path="default-image.jpg"
                className="w-12 h-12 rounded-full object-cover"
                width={48}
                height={48}
              />
              <Link>Paradon Meeanan</Link>
            </div>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="flex gap-2">
              <Link>
                <Image path="/facebook.svg" />
              </Link>
              <Link>
                <Image path="/instagram.svg" />
              </Link>
            </div>
            
          </div>

          <PostMenuActions />

          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>

          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Web Design</Link>
            <Link className="underline">Development</Link>
            <Link className="underline">Databases</Link>
            <Link className="underline">Search Engine</Link>
            <Link className="underline">Marketing</Link>
          </div>

          <div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
