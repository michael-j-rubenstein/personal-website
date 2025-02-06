import Header from "@/components/Header/Header";
import React from "react";
import styles from "./layout.module.css";

const layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default layout;
