"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from './navLink.module.css';

const NavLink = ({ item }: any) => {

  const pathName = usePathname();

  return (
    <div>
      {item.mobile ? (
        <div className="flex flex-row gap-[20px] justify-center items-center relative">
          <item.icon
            className={`${pathName === item.path && "text-[gold]"} hidden max-md:block hover:text-[gold]`}
            color="#FBA834"
            width={30}
            height={30} />
        </div>
      ) : (
        <div key={item.title} className={`${pathName === item.path && "border-b-[3px] border-b-violet-500"} group flex flex-row relative justify-center items-center gap-[10px] hover:border-b-violet-500 hover:border-b-[3px]`}>
          <item.icon
            className={`${pathName === item.path && "text-[gold]"} max-[1024px]:hidden group-hover:text-[gold]`}
            color="#FBA834"
            width={20}
            height={20} />
          <Link
            key={item.title}
            href={item.path}
            className={`inline-flex min-w-14 p-2 text-center font-semibold`}
          >
            {item.title}
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavLink
