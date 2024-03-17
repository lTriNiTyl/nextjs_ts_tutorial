"use client";

import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink';
import Link from 'next/link';

import { HomeIcon, AboutIcon, ContactIcon, BlogIcon, LoginIcon } from '../../../../public/svg';

export const links = [
  {
    title: "Homepage",
    path: "/",
    mobile: false,
    icon: HomeIcon
  },
  {
    title: "About",
    path: "/about",
    mobile: false,
    icon: AboutIcon
  },
  {
    title: "Contact",
    path: "/contact",
    mobile: false,
    icon: ContactIcon
  },
  {
    title: "Blog",
    path: "/blog" || "/blog/post",
    mobile: false,
    icon: BlogIcon
  },
];

const Links = () => {
  // 반응형 메뉴를 위한 상태값
  const [open, setOpen] = useState(false);

  // temp
  const session = false;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link => (
          <div key={link.title} className="flex flex-row relative justify-center items-center gap-[10px]">
            <NavLink item={{ title: link.title, path: link.path, icon: link.icon, mobile: link.mobile }} key={link.title} />
          </div>
        )))}
        {session ? (
          <div>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="py-2 px-4 rounded-lg bg-white text-black">Logout</button>
          </div>
        ) : (
          <div className="flex flex-row relative justify-center items-center gap-[10px]">
            <NavLink item={{ title: "Login", path: "/login", icon: LoginIcon, mobile: false }} />
          </div>
        )}
      </div>
      <div className="flex flex-row gap-[20px] justify-center items-center relative">
        {links.map((link => (
          <Link href={link.path} key={link.title}>
            <NavLink item={{ title: link.title, path: link.path, icon: link.icon, mobile: true }} key={link.title} />
          </Link>
        )))}
        <Link href="/login" key='Login'>
          <NavLink item={{ title: "Login", path: "/login", icon: LoginIcon, mobile: true }} />
        </Link>
      </div>
    </div>
  )
}

export default Links
