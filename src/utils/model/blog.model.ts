import { model, Schema, models } from "mongoose";

export interface IBlog extends Document {
  name: string;
  content: string;
  author: string;
  image: string;
}
const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.Blog || model("Blog", BlogSchema);
