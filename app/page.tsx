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

  const post = [
    {
      id: "1779784360448979052"
    }, {
      id: "1803115094588449022"
    },{
      id: "1762842753610776751"
    }
  ]

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-7">
      <ThemeToggle className="fixed z-50 right-5 top-5" />
      <NavBar />
      <Banner />
      <div className="h-auto max-w-[100%] relative w-[100%]">
        <ParallaxPortfolio />
      </div>
      
      <h1 className="text-primary font-semibold leading-7">
        LinkedIn
      </h1>
      <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Posts LinkedIn that's interested you !
      </p>

      <div className="flex gap-2 mt-8 flex-wrap justify-center items-center">
        {
          post.map((post) => (
            <TweetCard id={post.id} key={post.id}/>
          ))
        }
      </div>
      <MarqueeCard />
      {/* <PostLinkdin/> */}
    </div>
  );
}
