import React from "react";
import SingleBlog from ".";

interface Params {
  id: string;
}

const Page = ({ blog }: { blog: any }) => {
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <SingleBlog blog={blog} />
    </div>
  );
};

// Server-side fetching with getServerSideProps
export async function getServerSideProps({ params }: { params: Params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      notFound: true, // Optional: Handle when blog is not found
    };
  }

  const blog = await res.json();

  return {
    props: { blog },
  };
}

export default Page;
