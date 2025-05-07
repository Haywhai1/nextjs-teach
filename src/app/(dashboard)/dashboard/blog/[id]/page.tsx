import React from "react";
import SingleBlog from ".";

type ParamType = {
  params: {
    id: string;
  };
};
const Page = async ({ params }: ParamType) => {
  const id = await params?.id;

  const data = await fetch(`http://localhost:3000/api/blog/${id}`);
  const blog = await data.json();
  console.log(blog);
  return (
    <div>
      <SingleBlog blog={blog} />
    </div>
  );
};

export default Page;
