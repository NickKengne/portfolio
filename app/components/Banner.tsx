import { CloudCircle } from '@/components/CloudCircle'
import { Verified } from '@/components/magicui/tweet-card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Upload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className="flex w-full p-7 flex-wrap justify-center items-center">
        <div className="lg:block md:block flex flex-col gap-4 justify-center items-center">
          <Link href={"https://www.linkedin.com/in/nick-kengne-b7752924b"} >
            <p className="text-4xl font-bold mb-2 lg:text-start md:text-start text-center">Discover all <span className="text-primary">about</span> me</p>
            <p className="text-xl lg:text-start  text-center">I'm a software engineering student !</p>
            <p className="text-xl lg:text-start  text-center mb-6">My purpose is to work with a big company.</p>
          </Link>
            
          <Link href="mailto:nickdk294@gmail.com" className='btn'>Download my resume </Link>
        </div>
        <CloudCircle />
      </div>
  )
}
