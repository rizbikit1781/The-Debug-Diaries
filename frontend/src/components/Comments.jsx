import React from 'react'
import Comment from './Comment';

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-grey-500 underline">Commmets</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment..."
          className="w-full rounded-xl p-4 bg-slate-200/50"
        />
        <button className="bg-[#4CAF50] px-4 py-3 text-white rounded-xl font-medium">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments