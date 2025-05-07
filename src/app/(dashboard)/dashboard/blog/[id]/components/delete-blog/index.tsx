"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const DeleteBlog = () => {
  const [isLoading, setisLoading] = useState(false);
  const { id } = useParams();
  const navigate = useRouter();

  async function handleDelete() {
    setisLoading(true);
    try {
      await fetch(`/api/blog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate.push("/dashboard/blog");
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }
  return (
    <div>
      <button
        className="bg-red-500 py-3 px-3 rounded text-white cursor-pointer hover:bg-red-600 "
        onClick={handleDelete}
      >
        {isLoading ? "loading..." : "Delete Blog"}
      </button>
    </div>
  );
};

export default DeleteBlog;
