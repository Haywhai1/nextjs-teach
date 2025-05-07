import React from "react";
import Blog from ".";

const Page = async () => {
  const data = await fetch("http://localhost:3000/api/blog");
  const blogs = await data.json();

  return (
    <div>
      <Blog blogs={blogs} />
    </div>
  );
};

export default Page;
