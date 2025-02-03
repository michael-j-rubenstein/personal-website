"use client";
import React, { useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";
import Badge from "../Badges/Badge";
import PublishedBadge from "../Badges/PublishedBadge";

const ProjectCard = ({
  title,
  description,
  imageSrc,
  categories,
  blogSlug,
  deployedUrl = undefined,
  style,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const overlayHandler = (value = undefined) => {
    setShowOverlay(value);
  };

  return (
    <div className={styles.projectCardContainer} style={style}>
      <div
        className={styles.cardTopSection}
        onClick={() => setShowOverlay((val) => !val)}
        onMouseEnter={!isMobile ? () => overlayHandler(true) : null}
        onMouseLeave={!isMobile ? () => overlayHandler(false) : null}
      >
        {showOverlay && (
          <div className={styles.overlay}>
            <p className={styles.description}>{description}</p>
            <div className={styles.overlayLinks}>
              <a className={styles.link}>More Info</a>
              <a className={styles.link}>Repo</a>
              <a
                className={`${styles.link} ${
                  !deployedUrl && styles.linkDisabled
                }`}
                href={deployedUrl || "#"}
              >
                Live
              </a>
            </div>
          </div>
        )}
        <PublishedBadge
          style={styles.publishedBadge}
          isPublished={!!deployedUrl}
        />
        <img
          src={imageSrc}
          alt={`Image of ${title} project`}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.cardBottomSection}>
        <h3>{title}</h3>
        <div className={styles.categories}>
          {Array.from(categories).map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
