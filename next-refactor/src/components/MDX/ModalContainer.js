"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ModalContainer.module.css";

const ModalContainer = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Skip scroll logic for nested ModalContainers
    if (el.parentElement?.closest(`.${styles.container}`)) return;

    const mql = window.matchMedia("(min-width: 1500px)");

    // --- Scroll spy setup (only at 1500px+ when sidebar is visible) ---
    const isDesktopSidebar = window.matchMedia("(min-width: 1500px)").matches;
    let idToLi = null;
    let headings = null;
    let activeLi = null;

    if (isDesktopSidebar) {
      headings = Array.from(document.querySelectorAll("h2[id], h3[id]"))
        .filter((h) => h.offsetParent !== null); // skip display:none
      const tocLinks = el.querySelectorAll('a[href^="#"]');
      idToLi = new Map();
      tocLinks.forEach((a) => {
        const id = a.getAttribute("href")?.slice(1);
        const li = a.closest("li");
        if (id && li) idToLi.set(id, li);
      });
      if (idToLi.size === 0) idToLi = null;
    }

    // --- Scroll handler (positioning + spy) ---
    const initialOffset = window.innerHeight * 0.3;

    const onScroll = () => {
      const top = Math.max(20, initialOffset - window.scrollY);
      el.style.top = `${top}px`;

      if (idToLi && headings) {
        let activeId = null;
        const threshold = window.innerHeight * 0.3;
        for (const h of headings) {
          if (h.getBoundingClientRect().top <= threshold) {
            activeId = h.id;
          }
        }
        if (!activeId && headings.length > 0) activeId = headings[0].id;
        const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 5;
        if (atBottom && headings.length > 0) activeId = headings[headings.length - 1].id;
        const nextLi = activeId ? idToLi.get(activeId) || null : null;
        if (nextLi !== activeLi) {
          if (activeLi) activeLi.removeAttribute("data-active");
          if (nextLi) nextLi.setAttribute("data-active", "true");
          activeLi = nextLi;
        }
      }
    };

    // Only attach scroll handler when viewport is >= 1500px
    if (mql.matches) {
      onScroll();
      el.style.visibility = "visible";
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    const onMediaChange = (e) => {
      if (e.matches) {
        onScroll();
        el.style.visibility = "visible";
        window.addEventListener("scroll", onScroll, { passive: true });
      } else {
        window.removeEventListener("scroll", onScroll);
        el.style.top = "";
        el.style.visibility = "";
        if (activeLi) {
          activeLi.removeAttribute("data-active");
          activeLi = null;
        }
      }
    };
    mql.addEventListener("change", onMediaChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mql.removeEventListener("change", onMediaChange);
      if (activeLi) activeLi.removeAttribute("data-active");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isOpen ? styles.containerOpen : ""}`}
    >
      <div className={styles.btnContainer}>
        {/* <button className={styles.modalBackBtn} onClick={goBack}>
          Back
        </button> */}
        <div></div>
        <button
          className={styles.modalBtn}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image
            className={styles.navToggler}
            src={
              isOpen
                ? "../menu-svgrepo-com.svg"
                : "../menu-svgrepo-com-white.svg"
            }
            width={25}
            height={25}
            alt=""
          />
        </button>
      </div>
      <div className={`${styles.content}`}>{children}</div>
    </div>
  );
};

export default ModalContainer;
