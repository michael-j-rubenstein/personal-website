import React from "react";
import styles from "./PublishedBadge.module.css";

const PublishedBadge = ({ isPublished, style }) => {
  return (
    <div className={`${styles.badgeContainer} ${style}`}>
      <div className={`${styles.dot} ${isPublished && styles.publishedDot}`} />
      <p className={styles.badgeText}>
        {isPublished ? "Published" : "Not Published"}
      </p>
    </div>
  );
};

export default PublishedBadge;
