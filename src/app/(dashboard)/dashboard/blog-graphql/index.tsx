"use client";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import React from "react";

export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const GET_BLOGS = gql`
  query GetBlogs {
    blogs {
      id
      title
      content
    }
  }
`;

const BlogGraphql = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);
  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
      <div className="space-y-6">
        {data.blogs.map((blog: Blog) => (
          <Link href={"/dashboard/blog-graphql/" + blog.id} key={blog.id}>
            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogGraphql;
