"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavLink = ({ item }: any) => {

  const pathName = usePathname();

  /* A function that determines whether the menu is active or not. */
  const checkActivePath = (path: string) => {
    if (path === "/" && pathName !== path) {
      return false;
    }
    return pathName.startsWith(path);
  };

  return (
    <div>
      {item.mobile ? (
        <div className="flex flex-row gap-[20px] justify-center items-center relative">
          <item.icon
            className={`${checkActivePath(item.path) && "text-[gold]"} hidden max-md:block hover:text-[gold]`}
            color="#FBA834"
            width={20}
            height={20} />
        </div>
      ) : (
        <div key={item.title} className={`${checkActivePath(item.path) && "border-b-[3px] border-b-violet-500"}
          group flex flex-row relative gap-[10px] hover:border-b-violet-300 hover:border-b-[3px]`}>
          <Link
            key={item.title}
            href={item.path}
            className={`${checkActivePath(item.path) ? "active" : ""} gap-3 inline-flex min-w-14 p-2 items-center 
              text-center font-semibold`}
          >
            <item.icon
              className={`${checkActivePath(item.path) && "text-[gold]"} max-[1024px]:hidden group-hover:text-[gold]`}
              color="#FBA834"
              width={20}
              height={20} />
            {item.title}
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavLink
