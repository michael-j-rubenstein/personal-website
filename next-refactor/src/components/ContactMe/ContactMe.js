import React from "react";
import styles from "./ContactMe.module.css";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const ContactMe = () => {
  return (
    <section className={styles.contactWrapper} id="contact">
      <div className="container">
        <div className={`${styles.contactContainer} ${styles.container}`}>
          <h2 className={`${styles.heading} ${styles.container}`}>
            Contact Me
          </h2>
          <div className={styles.contact}>
            <div className={styles.contactContent}>
              <h3>Let's Connect!</h3>
              <p>
                If you ever want to go snowboarding or code together, feel free
                to find me on social media or contact me using the form below!
              </p>
              <ul className={`list listInline ${styles.contactList}`}>
                <li className={styles.listItem}>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.linkedin.com/in/michael-j-rubenstein/"
                  >
                    <AiFillLinkedin className={styles.contactIcon} />
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.instagram.com/michael_j_rubenstein/"
                  >
                    <AiOutlineInstagram className={styles.contactIcon} />
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/michael-j-rubenstein"
                  >
                    <AiFillGithub className={styles.contactIcon} />
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    className="fa-solid fa-envelope fa-lg"
                    href="mailto:michael@iu21.com"
                  >
                    <AiOutlineMail className={styles.contactIcon} />
                  </a>
                </li>
              </ul>
            </div>
            <form
              className={styles.contactForm}
              action="https://formspree.io/f/xayknvbg"
              method="POST"
            >
              <input
                name="name"
                id="name"
                type="text"
                placeholder="name"
                required
              />
              <input
                name="email"
                id="email"
                type="email"
                pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                placeholder="email"
                required
              />
              <textarea
                name="message"
                className={styles.message}
                cols="30"
                rows="7"
                maxLength="300"
                placeholder="message"
                required
              ></textarea>
              <button
                className={`${styles.btn} ${styles.contactBtn}`}
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
