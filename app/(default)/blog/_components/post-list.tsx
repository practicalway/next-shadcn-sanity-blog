import Link from "next/link";
import { Post } from "@/sanity/lib/sanity";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PostFooter } from "./post-footer";
import { PostImage } from "./post-image";

export const PostList = ({ allPosts }: { allPosts: Post[] }) => {
  return (
    <BentoGrid className="max-w-4xl mx-auto mb-10 md:mb-26">
      {allPosts.map((post: Post, i) => (
        <Link href={`/blog/post/${post.slug}`}>
          <BentoGridItem
            key={post._id}
            title={post.title}
            description={post.summary}
            header={<PostImage mainImage={post.mainImage} />}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            footer={
              <PostFooter
                author={post.author}
                authorImg={post.authorImg}
                publishedAt={post.publishedAt}
              />
            }
          />
        </Link>
      ))}
    </BentoGrid>
  );
};
