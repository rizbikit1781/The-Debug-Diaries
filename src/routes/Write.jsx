import { useUser } from "@clerk/clerk-react";
import React from "react";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">Please login to write a content!</div>;
  }
  return (
    <div className="">
      <h1></h1>
      <form action="">
        <button>Add a cover image</button>
        <input type="text" placeholder="My Awesome Story" />
        <div className="">
          <label htmlFor="">Choose a category:</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Write;
