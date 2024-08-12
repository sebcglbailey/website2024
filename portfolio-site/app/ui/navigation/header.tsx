'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './navigation.module.css';

const links = [
  {
    name: "home",
    href: "/"
  },
  // {
  //   name: "case studies",
  //   href: "/case-studies"
  // },
  {
    name: "work",
    href: "/work"
  },
  {
    name: "education",
    href: "/education"
  }
]

export default function Header() {
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

  function handleBurgerClick() {
    setMenuVisible(!menuVisible);
  }

  function handleMenuClick() {
    setMenuVisible(false);
  }

  const navLinks = links.map((link) => {
    return (
      <Link
        key={link.name}
        href={link.href}
        className={clsx(
          styles.navLink,
          {
            [styles.active]: pathname === link.href,
          }
        )}
      >
        {link.name}
      </Link>
    )
  })

  return(
    <div className={styles.navBar}>
      <div className={styles.logoBurgerWrapper}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/logo-white.svg'
              width={56}
              height={56}
              alt="Sebastian Bailey's Personal Logo"
            />
          </Link>
        </div>
        <div
          onClick={handleBurgerClick}
          className={clsx(
            styles.burgerMenu,
            {
              [styles.active]: menuVisible,
            },
          )}
        >
          <div className={styles.top} />
          <div className={styles.middle} />
          <div className={styles.bottom} />
        </div>
      </div>
      <div
        onClick={handleMenuClick}
        className={clsx(
          styles.navigation,
          {
            [styles.active]: menuVisible,
          },
        )}
      >
        {navLinks}
        <Link
          href='http://art.sebastianbailey.co.uk'
          className={styles.navLink}
          target='_blank'
        >
          art
        </Link>
        <Link
          className={styles.navLink}
          href='mailto:sebcglbailey@gmail.com?subject=I%20Want%20Your%20Work&body=Let%27s%20talk%20about%20Seb%2C%20Bailey.%20Let%27s%20talk%20about%20you%20and%20me.'
        >
          contact
        </Link>
      </div>
    </div>
  )
}