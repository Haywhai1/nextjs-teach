import { ConnectDB } from "@/lib/connect";
import blogModel from "@/utils/model/blog.model";
import { NextResponse } from "next/server";


export const GET = async (
  request: Request,
  context: { params: Promise<{ id: string }> }
) => {
  const { id } = await context.params; // ✅ await here

  try {
    await ConnectDB();
    const blog = await blogModel.findById(id);
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching blog", error }, { status: 500 });
  }
};



export const PATCH = async (req: Request, context: { params: Promise<{ id: string }> }) => {
  const { id } = await context.params; // ✅ await here!

  const blogBody = await req.json();

  try {
    await ConnectDB();

    // Validate that required fields are present in blogBody
    if (!blogBody.title || !blogBody.content || !blogBody.author) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Attempt to update the blog document by id
    const updatedBlog = await blogModel.findByIdAndUpdate(id, blogBody, {
      new: true,
    });

    // If no blog found, return a 404
    if (!updatedBlog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    // Return the updated blog
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update blog", error },
      { status: 500 }
    );
  }
};


export const DELETE = async (
  req: Request,
  context: { params: Promise<{ id: string }> }
) => {
  const { id } = await context.params;

  try {
    await ConnectDB();
    await blogModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "deleted success" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete blog", error }, { status: 500 });
  }
};

