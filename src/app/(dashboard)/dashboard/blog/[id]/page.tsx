// app/dashboard/blog/[id]/page.tsx
import { getBlogById } from "@/lib/blog"; // import the shared function
import SingleBlog from ".";
import { log } from "console";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const blog = await getBlogById(id); // 🚫 no fetch, direct DB access
  console.log(blog);
  

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <SingleBlog blog={blog} />;
}
