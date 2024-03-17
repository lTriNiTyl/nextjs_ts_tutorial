"use client";

import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="col-span-1 place-self-center">
          <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src='/contact.png'
              alt='contact image'
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className='col-span-1 place-self-center lg:place-self-stretch mb-10 lg:mb-0'>
          <form action='' className="flex flex-col gap-3">
            <input type="text" id="name" autoComplete='off' placeholder='Name and surname' className='p-3 rounded-md border-none outline-none bg-[#2d2b42]' />
            <input type="text" id="email" autoComplete='off' placeholder='Email address' className='p-3 rounded-md border-none outline-none bg-[#2d2b42]' />
            <input type="text" id="phone" autoComplete='off' placeholder='Phone number(Optional)' className='p-3 rounded-md border-none outline-none bg-[#2d2b42]' />
            <textarea
              name=""
              id="message"
              cols={30}
              rows={10}
              placeholder='Message'
              className='p-5 rounded-md border-none outline-none bg-[#2d2b42]'
            ></textarea>
            <button id="send" className="p-3 rounded-md border-2 border-violet-300 bg-violet-700">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
