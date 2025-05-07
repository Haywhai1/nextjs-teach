import React from "react";
import SingleBlog from ".";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

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
}
