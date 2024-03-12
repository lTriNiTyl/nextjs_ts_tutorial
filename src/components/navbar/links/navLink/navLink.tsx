"use client";

import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation';

const NavLink = ({ item }: any) => {

  const pathName = usePathname();


  return (
    <Link 
      href={item.path} 
      className={`inline-flex min-w-14 p-4 rounded-xl text-center font-semibold
        ${pathName === item.path && "border-2 border-violet-500 bg-violet-700"} hover:ring-violet-500 hover:ring focus:ring-violet-300`
      }
    >
      {item.title}
    </Link>
  )
}

export default NavLink
