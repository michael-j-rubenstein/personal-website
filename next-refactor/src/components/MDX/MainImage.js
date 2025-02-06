import React from "react";
import styles from "./MainImage.module.css";

const MainImage = ({ src, alt, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={src} className={styles.img} alt={alt} />
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default MainImage;
