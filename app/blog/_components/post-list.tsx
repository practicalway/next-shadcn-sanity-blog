import PostItem from "./post-item";
import { Post, getPosts } from "@/sanity/lib/sanity";

export default async function PostList({ ...props }) {
  const allPosts = await getPosts();

  return (
    <div>
      {allPosts.map((post: Post) => (
        <section key={post._id} className="container">
          <PostItem key={post._id} {...post} />
        </section>
      ))}
    </div>
  );
}
