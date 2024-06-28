import { TweetCard } from "@/components/magicui/TweetCard";
import { MarqueeCard } from "@/components/MarqueeCard";
import { NavBar } from "@/components/NavBar";
import { ParallaxPortfolio } from "@/components/ParallaxPorfolio";
import { ThemeToggle } from "@/components/ThemeToggle";
import React from "react";
import Banner from "./components/Banner";
import { NeonCard } from "@/components/NeonCard";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

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
      <NeonCard/>
      <p className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
        Posts that will <span className="text-primary">interest</span> you!
      </p>

      <div className="flex gap-2 mt-8 p-7 flex-wrap justify-center items-center">
        {
          post.map((post) => (
            <TweetCard id={post.id} key={post.id}/>
          ))
        }
      </div>
      <p className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
        Latest <span className="text-primary">reviews</span> about my posts ⭐ 
      </p>
      <MarqueeCard />
      <Footer/>
    </div>
  );
}
