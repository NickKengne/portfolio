

import { CloudCircle } from "@/components/CloudCircle";
import { Verified } from "@/components/magicui/tweet-card";
import { TweetCard } from "@/components/magicui/TweetCard";
import { MarqueeCard } from "@/components/MarqueeCard";
import { NavBar } from "@/components/NavBar";
import { ParallaxPortfolio } from "@/components/ParallaxPorfolio";
import PostLinkdin from "@/components/PostLinkdin";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Banner from "./components/Banner";

export default function page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-7">
      <ThemeToggle className="fixed z-50 right-5 top-5" />
      <NavBar />
      <Banner/>
      <div className="h-auto max-w-[100%] relative w-[100%]">
        {/* <p className="text-center text-7xl font-bold"></p> */}
      <ParallaxPortfolio/>
      </div>
      <MarqueeCard/>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        <TweetCard id="1762842753610776751" />
        <TweetCard id="1779784360448979052" />
        <TweetCard id="1803115094588449022" />
      </div>
      {/* <PostLinkdin/> */}

      

    </div>
  );
}


