import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 place-self-center text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-base font-bold text-blue-600 mb-6 lg:mb-10">About Agency</h2>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-10 leading-tight">
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className="text-sm font-semibold mb-6 lg:mb-10 lg:text-md">
            We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibillity and precission. We're world's Our Special Team best consulting & finance solution provider. Wide range of web and software development services.
          </p>
          <div className="flex items-center justify-between mb-10 text-center max-md:flex-col max-md:gap-[20px]">
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
        <div className="col-span-1 place-self-center m-10 xl:ml-14 order-1 lg:order-2">
          <div className="w-[300px] h-[300px] relative lg:w-[400px] lg:h-[400px]">
            <Image src="/about.png"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
              className="absolute transform"
            />
          </div>
        </div>
      </div >
    </section>
  )
}

export default AboutPage 
