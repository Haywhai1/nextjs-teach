import React from "react";
import { BlogType } from "../type";
import Image from "next/image";
import UpdateBlog from "./components/update-blog";
import DeleteBlog from "./components/delete-blog";

const SingleBlog = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {blog.author} • {new Date(blog.createdAt).toDateString()}
      </p>

      <div className="w-full h-[400px] relative mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="text-lg leading-relaxed text-gray-700">
        <p>{blog.content}</p>
      </div>

      {blog && <UpdateBlog blog={blog} />}
      {blog && <DeleteBlog />}
    </div>
  );
};

export default SingleBlog;
