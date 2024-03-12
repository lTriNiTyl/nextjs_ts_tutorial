import Image from 'next/image'
import React from 'react'

const SinglePostPage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1 h-[calc(100vh-200px)] relative max-md:hidden">
        <Image
          src="https://images.pexels.com/photos/16565204/pexels-photo-16565204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          priority={true}
          placeholder='empty'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex-[2_2_0%] flex flex-col gap-[40px]">
        <h1 className="text-[64px] font-bold">Title</h1>
        <div className="flex gap-[25px]">
          <Image
            src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
            priority={true}
            placeholder='empty'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover aspect-[2/1] rounded-[50%]"
          />
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="font-medium">Terry Jefferson</span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="font-medium">01.01.2024</span>
          </div>
        </div>
        <div className="text-[18px]">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
