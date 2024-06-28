import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Verified } from "./magicui/tweet-card";

export default function Footer() {
  return (
    <div className="w-[70%] h-[70px] flex bg-background shadow-lg rounded-[58px] justify-between items-center p-4 px-10">
      <Avatar>
        <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQHTYbBtKMY2Vg/profile-displayphoto-shrink_200_200/0/1714722950547?e=1724889600&v=beta&t=1x2DBFbtRgN6Y5WTkt4cTm30OQ31WB53sy_ywrnfhKE" />
      </Avatar>
      <div className="flex justify-center items-center gap-3">
        <Link href={"https://www.linkedin.com/in/nick-kengne-b7752924b"}>
          <Linkedin className="text-foreground" />
        </Link>
        <Link href={"https://wa.me/+237691578689"}>
          <Phone />
        </Link>
        <Link href={"mailto:nickdk294@gmail.com"}>
          <Mail />
        </Link>
      </div>
    </div>
  );
}
