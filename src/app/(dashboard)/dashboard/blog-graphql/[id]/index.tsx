"use client";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useParams } from "next/navigation";
import React from "react";

const GET_BLOG = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;

const SingleBlog = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { id },
  });

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  const { title, content, createdAt } = data.blog;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(createdAt).toLocaleDateString()}
      </p>
      <div className="prose prose-lg text-gray-800">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
