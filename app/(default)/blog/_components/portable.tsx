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
    <article className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mt-8 inline-flex",
            )}
          >
            &larr; See all posts
          </Link>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center space-x-4">
            <Image
              src={post.authorImg}
              alt={post.author}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-medium">{post.author}</p>
              <time
                dateTime={post.publishedAt}
                className="mt-2 block text-sm text-muted-foreground"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>
        <div className="prose mx-auto">
          <PortableText value={post.body} components={ptComponents} />
        </div>
        <Separator className="my-8" />
        <div className="flex justify-center">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            See all posts
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostDetail;
