import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={`${styles.about} container`} id="about">
      <div className={styles.aboutContent} data-aos="fade-right">
        <h2 className={`${styles.aboutTitle} heading`}>About Me</h2>
        <p>
          I'm a <span className="highlighted">fullstack engineer</span> and{" "}
          <span className="highlighted">entrepreneur</span> with a deep passion
          for <span className="highlighted">machine learning (ML)</span> and{" "}
          <span className="highlighted">artificial intelligence (AI)</span>.
          When I'm not coding, you can find me snowboarding, bouldering, or
          chasing sunrises around the world!
        </p>
        <p>
          I graduated from the University of Toronto (UofT) in May 2024, with a
          degree in
          <span className="highlighted"> Computer Science</span>.
        </p>
        <p>
          I'm proficient in{" "}
          <span className="highlighted">
            Python, Java, JavaScript, C, C#, C++, HTML, CSS, R, Bash, SQL
          </span>{" "}
          and I'm always eager to learn more!
        </p>
      </div>
      <img
        className={styles.aboutPic}
        src="./profile-photo.jpg"
        alt="Profile picture of Michael Jordan Rubenstein"
        data-aos="fade-in"
      />
    </section>
  );
};

export default AboutMe;
