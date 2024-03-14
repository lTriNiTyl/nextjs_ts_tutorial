import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const postCard = () => {
  return (
    <div className="flex flex-col gap-[30px] mb-5 mt-[50px]">
      <div className="flex">
        <div className="w-[100%] h-[250px] relative overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/20220218/pexels-photo-20220218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            loading='lazy'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
            className="object-cover"
          />
        </div>
        <span className="text-xs rotate-[270deg] m-auto">01.01.2024</span>
      </div>
      <div className="bottom">
        <h1 className="text-xl font-bold mb-4 w-[90%]">Title</h1>
        <p className="mb-4 font-light text-xs w-[90%] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad veritatis eaque quia reprehenderit a officia. Culpa tempora libero et, fugiat perferendis impedit cupiditate sint harum, quibusdam, rerum laboriosam assumenda!</p>
        <Link className="text-sm underline" href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default postCard
