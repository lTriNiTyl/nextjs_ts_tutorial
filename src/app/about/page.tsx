import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="flex gap-24">
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="text-base font-bold text-blue-600">About Agency</h2>
        <h1 className="text-4xl font-bold leading-tight">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-sm font-semibold">
          We create digital ideas that are bigger, bolder, braver and better.
          We believe in good ideas flexibillity and precission.
          We're world's Our Special Team best consulting & finance solution provider.
          Wide range of web and software development services.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl text-blue-600">10 K+</h1>
            <p className="text-xs">Year of Experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl text-blue-600">10 K+</h1>
            <p className="text-xs">Year of Experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl text-blue-600">10 K+</h1>
            <p className="text-xs">Year of Experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative uppercase hidden sm:inline">
        <Image src="https://images.pexels.com/photos/20230202/pexels-photo-20230202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="" 
          fill
          className="h-auto mx-auto max-w-fit rounded-xl shadow-xl"
        />
      </div>
    </div >
  )
}

export default AboutPage 
