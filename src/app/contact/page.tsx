"use client";

import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className="flex items-center gap-32 max-md:gap-0 max-md:flex-col">
      <div className="flex-1 h-[500px] relative overflow-hidden">
        <Image
          src='/contact.png'
          alt='contact image'
          fill
          loading='lazy'
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
          className="h-auto mx-auto max-w-fit object-cover max-md:hidden"
        />
      </div>
      <div className='flex-1'>
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
  )
}

export default ContactPage
