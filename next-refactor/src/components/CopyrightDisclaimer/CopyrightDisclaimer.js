import React from "react";
import styles from "./CopyrightDisclaimer.module.css";

const CopyrightDisclaimer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          Designed and Implemented by{" "}
          <span className="highlighted">Michael J Rubenstein</span>
        </p>
      </div>
    </footer>
  );
};

export default CopyrightDisclaimer;
