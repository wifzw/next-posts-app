import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Browse all our X posts.",
//   description: "Browse all our posts.",
// };

export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: "Browse all or posts.",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
