import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24">
      <Link href='/' className="text-3xl font-bold hover:text-teal-500">Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar
