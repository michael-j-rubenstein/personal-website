"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

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
      <nav className={`${styles.nav} ${styles.collapsible}`}>
        <h1>Michael Jordan Rubenstein</h1>
        <Image
          className={styles.navToggler}
          src="menu-svgrepo-com.svg"
          width={40}
          height={40}
          alt=""
          onClick={() => setIsNavOpen((val) => !val)}
        />
        {(isNavOpen || screenWidth >= 1100) && (
          <ul
            className={`${styles.list} ${styles.navList} ${styles.collapsibleContent}`}
          >
            <li className={styles.navItem}>
              <a href="#about">About Me</a>
            </li>
            <li className={styles.navItem}>
              <a href="#projects">My Projects</a>
            </li>
            <li className={styles.navItem}>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/michael-j-rubenstein"
              >
                My Repository
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        )}
      </nav>
      {/* <div className={styles.welcomeScreen}>
        <h1 className={styles.welcomeScreenHeading}>
          Hello, I'm Michael&nbsp;
        </h1>
        <svg
          className={styles.welcomeScreenSvg}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g>
            <polygon points="12 17.586 4.707 10.293 3.293 11.707 12 20.414 20.707 11.707 19.293 10.293 12 17.586" />
            <polygon points="20.707 5.707 19.293 4.293 12 11.586 4.707 4.293 3.293 5.707 12 14.414 20.707 5.707" />
          </g>
        </svg>
      </div> */}
    </header>
  );
};

export default Header;
