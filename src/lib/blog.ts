import { ConnectDB } from "@/lib/connect";
import blogModel from "@/utils/model/blog.model";

export async function getBlogById(id: string) {
  await ConnectDB();
  const blog = await blogModel.findById(id); // Get the Mongoose document
  
  if (!blog) return null;

  // Convert the Mongoose document to a plain object
  const plainBlog = blog.toObject();

  // Ensure no MongoDB-specific types are being passed to the client
  plainBlog._id = plainBlog._id.toString(); // Convert ObjectId to string
  plainBlog.createdAt = plainBlog.createdAt.toISOString(); // Convert Date to string
  plainBlog.updatedAt = plainBlog.updatedAt.toISOString(); // Convert Date to string

  delete plainBlog.__v; // Optionally remove __v (version key)
  
  return plainBlog;
}
