import React from "react";
import SingleBlog from ".";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const res = await fetch(`${baseUrl}/api/blog/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blog with id ${id}`);
  }

  const blog = await res.json();

  return (
    <div>
      <SingleBlog blog={blog} />
    </div>
  );
};

export default Page;
