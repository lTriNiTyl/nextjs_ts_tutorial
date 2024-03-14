import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="flex gap-[100px] max-md:flex-col max-md:text-center max-md:mt-[20px]">
      <div className="flex flex-1 flex-col gap-[50px] max-md:gap-[30px]">
        <h2 className="text-base font-bold text-blue-600">About Agency</h2>
        <h1 className="text-4xl font-bold leading-tight">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-sm font-semibold">
          We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibillity and precission. We're world's Our Special Team best consulting & finance solution provider. Wide range of web and software development services.
        </p>
        <div className="flex items-center justify-between max-md:flex-col max-md:gap-[50px]">
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
      <div className="flex-1 h-[500px] relative overflow-hidden">
        <Image src="/about.png"
          alt="" 
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
          className="h-auto mx-auto max-w-fit object-contain max-md:hidden"
        />
      </div>
    </div >
  )
}

export default AboutPage 
