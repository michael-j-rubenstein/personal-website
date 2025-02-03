import React from "react";
import styles from "./Badge.module.css";

const Badge = ({ children }) => {
  return (
    <div className={styles.badgeContainer}>
      <p className={styles.badgeText}>{children}</p>
    </div>
  );
};

export default Badge;
