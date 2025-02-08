import React from "react";
import styles from "./TechStack.module.css";
import Badge from "../Badges/Badge";

const TechStack = ({ technologies = [] }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Technologies Used:</p>
      <div className={styles.innerContainer}>
        {technologies.map((name) => (
          <Badge>{name}</Badge>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
