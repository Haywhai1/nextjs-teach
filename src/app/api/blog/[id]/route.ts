import { ConnectDB } from "@/lib/connect";
import blogModel from "@/utils/model/blog.model";
import { NextResponse } from "next/server";

type ParamType = {
  params: {
    id: string;
  };
};

export const PATCH = async (req: Request, { params }: ParamType) => {
  try {
    ConnectDB();
    const blogBody = await req.json();

    const newUpdateBlog = await blogModel.findByIdAndUpdate(
      params.id,
      blogBody,
      {
        new: true,
      }
    );
    return NextResponse.json({ message: "updated Sucess", newUpdateBlog });
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const DELETE = async (req: Request, { params }: ParamType) => {
  try {
    ConnectDB();
    await blogModel.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "deleted success" });
  } catch (error) {
    return NextResponse.json(error);
  }
};
