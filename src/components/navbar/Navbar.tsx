import React from 'react'
import Links from './links/Links'
import Link from 'next/link'
import LogoIcon from '@../../../public/svg/logo.svg';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 ml-[50px] mr-[50px]">
      <div className="group flex flex-row gap-[10px] justify-center items-center">
        <Link href="/" key="Home">
          <LogoIcon className="group-hover:text-[gold]" color='#FBA834' width={30} height={30} />
        </Link>
        <Link href='/' className="text-3xl font-bold group-hover:text-[gold] max-md:hidden">TriNiTy</Link>
      </div>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar
