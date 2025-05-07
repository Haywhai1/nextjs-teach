import React from "react";
import { BlogType } from "./type";
import Link from "next/link";
import Image from "next/image";

const Blog = ({ blogs }: { blogs: BlogType[] }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Link
          href="/dashboard/blog/create-blog"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create New Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Link href={"/dashboard/blog/" + blog._id}>
              <Image
                src={blog.image}
                alt="Blog Image"
                className="w-full h-56 object-cover"
                width={300}
                height={300}
              />
            </Link>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.content}
              </p>
              <div className="text-sm text-gray-500">
                <p>By {blog.author}</p>
                <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
