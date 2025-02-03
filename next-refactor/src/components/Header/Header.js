"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

const HEADER_LINKS = [
  { href: "#about", text: "About", newTab: false },
  { href: "#projects", text: "Projects", newTab: false },
  {
    href: "https://github.com/michael-j-rubenstein",
    text: "Repository",
    newTab: true,
  },
  { href: "#contact", text: "Contact", newTab: false },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header>
      <nav
        className={`${styles.nav} ${styles.collapsible} ${
          isNavOpen && styles.collapsibleExpanded
        }`}
      >
        <h1>Michael Jordan Rubenstein</h1>
        <Image
          className={styles.navToggler}
          src="menu-svgrepo-com.svg"
          width={40}
          height={40}
          alt=""
          onClick={() => setIsNavOpen((val) => !val)}
        />

        <ul
          className={`${styles.list} ${styles.navList} ${styles.collapsibleContent}`}
        >
          {HEADER_LINKS.map(({ href, text, newTab }, index) => (
            <li key={text} className={`${styles.navItem} }`}>
              <a
                href={href}
                target={newTab ? "_blank" : "_self"}
                rel={newTab ? "noreferrer noopener" : ""}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
