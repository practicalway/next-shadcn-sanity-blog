"use client";
import { SiteFooter } from "@/components/layout/footer";
import PostList from "./_components/post-list";
import { Suspense } from "react";
import { NavbarMenu } from "@/components/layout/navbar";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <>
      <main className="min-h-screen antialiased">
        <HeroSection />
        <div className="space-y-6">
          <Suspense fallback={<h2>Loading</h2>}>
            <PostList />
          </Suspense>
        </div>
      </main>
    </>
  );
}
