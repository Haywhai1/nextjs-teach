import { ConnectDB } from "@/lib/connect";
import blogModel from "@/utils/model/blog.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    ConnectDB();

    const blogs = await blogModel.find();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const POST = async (request: Request) => {
  const blogBody = await request.json();
  console.log(blogBody);
  try {
    await ConnectDB();
    const res = await blogModel.create(blogBody);
    return NextResponse.json({ message: "created success", res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
