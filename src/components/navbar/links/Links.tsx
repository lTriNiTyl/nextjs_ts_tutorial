"use client";

import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink';

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
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
          <NavLink item={link} key={link.title} />
        )))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="py-2 px-4 rounded-lg bg-white text-black">Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {
        open && <div className="uppercase hidden sm:inline">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      }
    </div>
  )
}

export default Links
