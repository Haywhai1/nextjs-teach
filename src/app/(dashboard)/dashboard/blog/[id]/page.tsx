import SingleBlog from ".";

type PageProps = {
  params: Promise<{ id: string }>; // <- params is a Promise
};

export default async function Page({ params }: PageProps) {
  const { id } = await params; // ✅ await here

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
