"use client";
import React from "react";
import { ptComponents } from "./pt-components";
import { PortableText } from "@portabletext/react";
import { getPost } from "@/sanity/lib/sanity";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/date-format";
import { buttonVariants } from "@/components/ui/button";

async function PostDetail({ postSlug }: any) {
  const post = await getPost(postSlug);

  return (
    <article className="mt-8 container relative max-w-7xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex",
        )}
      >
        See all posts
      </Link>
      <div>
        <p className="mt-2 text-3xl leading-tight ">{post.title}</p>
        <time
          dateTime={post.publishedAt}
          className="block text-sm text-muted-foreground"
        >
          Published At: {formatDate(post.publishedAt)}
        </time>
        <div className="pt-8 flex space-x-4">
          <div
            key={post._id}
            className="mt-8 flex items-center space-x-2 text-sm"
          >
            <Image
              src={post.authorImg}
              alt={post.author}
              width={42}
              height={42}
              className="rounded-full bg-white"
            />
            <div className="ml-2 flex-1 text-left leading-tight">
              <p className="font-medium">{post.author}</p>
              <p className="text-[12px] text-muted-foreground">
                {post.authorPosition}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <PortableText value={post.body} components={ptComponents} />
      </div>
      <Separator className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          See all posts
        </Link>
      </div>
    </article>
  );
}

export default PostDetail;
