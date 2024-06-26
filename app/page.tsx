

import { CloudCircle } from "@/components/CloudCircle";
import { TweetCard } from "@/components/magicui/TweetCard";
import { NavBar } from "@/components/NavBar";
import PostLinkdin from "@/components/PostLinkdin";
import { ThemeToggle } from "@/components/ThemeToggle";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-7">
      <NavBar />
      <ThemeToggle className="absolute right-5 top-5" />
      <CloudCircle />
      <div className="flex gap-2 flex-wrap justify-center items-center">
        <TweetCard id="1762842753610776751" />
        <TweetCard id="1779784360448979052" />
        <TweetCard id="1803115094588449022" />
      </div>
      {/* <PostLinkdin/> */}
    </div>
  );
}
