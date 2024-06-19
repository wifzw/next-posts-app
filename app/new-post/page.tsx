import PostForm from "@/components/PostForm";
import { createPost } from "../../actions/posts";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
