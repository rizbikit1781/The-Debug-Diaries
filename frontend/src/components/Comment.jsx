import React from "react";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-200/50 rounded-xl mb-2">
      <div className="flex items-center gap-4">
        <Image
          path="default-image.jpg"
          className="w-10 h-10 rounded-full object-cover"
          width={40}
        />
        <span className="font-medium">Paradon Meeanan</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          quasi, consequatur atque expedita aut excepturi asperiores quaerat,
          quam saepe ipsum, labore fugit quo ab sint dolorem dolores soluta.
          Officiis, et!
        </p>
      </div>
    </div>
  );
};

export default Comment;
