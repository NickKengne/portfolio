import { CloudCircle } from '@/components/CloudCircle'
import { Verified } from '@/components/magicui/tweet-card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export default function Banner() {
  return (
    <div className="flex w-full p-7 flex-wrap justify-center items-center">
        <div className="lg:block md:block flex flex-col justify-center items-center">
            <p className="text-4xl font-bold mb-2 lg:text-start md:text-start text-center">Discover all <span className="text-primary">about</span> me</p>
            <p className="text-xl lg:text-start  text-center">I'm software engineering student !</p>
            <p className="text-xl lg:text-start  text-center">My purpose is to work with a big company.</p>
            <div className="flex lg:justify-start justify-center items-center gap-2 mt-2">
              <Avatar>
                <AvatarImage src="https://media.licdn.com/dms/image/D4E03AQHTYbBtKMY2Vg/profile-displayphoto-shrink_200_200/0/1714722950547?e=1724889600&v=beta&t=1x2DBFbtRgN6Y5WTkt4cTm30OQ31WB53sy_ywrnfhKE"/>
              </Avatar>
              <p>Nick Kengne <Verified className="ml-1 inline h-4 w-4 text-blue-500"/></p>
            </div>
        </div>
        <CloudCircle />
      </div>
  )
}
