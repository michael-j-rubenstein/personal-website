"use client";
import React from "react";
import Image from "next/image";
import styles from "./ModalContainer.module.css";

const ModalContainer = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const goBack = () => {
    if (!isOpen) return;
  };

  return (
    <div className={`${styles.container} ${isOpen && styles.containerOpen}`}>
      <div className={styles.btnContainer}>
        <button className={styles.modalBackBtn} onClick={goBack}>
          Back
        </button>
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
