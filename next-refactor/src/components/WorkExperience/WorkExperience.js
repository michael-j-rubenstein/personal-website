"use client";
import React, { useEffect, useRef } from "react";
import styles from "./WorkExperience.module.css";

const EXPERIENCE = [
  {
    title: "Frontend Lead & Backend Architect",
    company: "IBM",
    date: "2025 - Present",
    jobDescription:
      "Founding engineer on watsonx Workshop, IBM's internal AI-powered enablement platform for sales professionals. My responsibilities include leading frontend development and architecting our serverless backend. Led a team of ten interns to deliver core features end-to-end.",
    isCurrent: true,
  },
  {
    title: "Demo Engineer / Sales Enablement",
    company: "IBM",
    date: "2024 - 2025",
    jobDescription:
      "Developed demos, workflow optimization tools, labs, and learning content as part of the IBM Global Sales department within the Data and AI team.",
    isCurrent: false,
  },
  {
    title: "Machine Learning Engineer",
    company: "Fabri Sciences Inc.",
    date: "2023 - 2024",
    jobDescription:
      "Contracted to develop, fine-tune and validate the performance of neural networks to ensure effective integration into a 3D medical imaging application.",
    isCurrent: false,
  },
  {
    title: "Machine Learning Researcher",
    company: "University of Toronto",
    date: "2023-2024",
    jobDescription:
      "Worked on worked integrating symbolic logic into Large Language Models (LLMs) to improve logical reasoning and reduce hallucinations. My responsibilities included developing strategies for the efficient extraction and generation of need satisfiers from textual descriptions. I also fine-tuned pretrained models such as BERT, RoBERTa, and others to enhance the accuracy and efficiency of the need satisfier extraction process.",
    isCurrent: false,
  },
  {
    title: "Chief Information Officer",
    company: "Ensighter Group",
    date: "2020-2023",
    jobDescription:
      "Spearheaded development of the website and mobile application for Laureate Club, a membership program for young travelers offering exclusive discounts and benefits with partnered airlines, hotels, and travel services. Managed a cross-functional team of interns, coordinated project timelines and deliverables, and ensured successful product launch within four months.",
    isCurrent: false,
  },
  {
    title: "Web Developer",
    company: "University of Toronto",
    date: "2022-2023",
    jobDescription:
      "Collaborated with a team of seven under the guidance of a professor to develop a web application aimed at matching social workers. Contributed to both the creation and maintenance of the application using technologies such as React.js, GraphDB, and MongoDB.",
    isCurrent: false,
  },
];

const Career = () => {
  const entryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    entryRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.careerContainer} container`} id="career">
      <h2 className="heading">My Career</h2>
      {EXPERIENCE.map(
        ({ title, company, date, jobDescription, isCurrent }, index) => {
          return (
            <div
              key={title}
              ref={(el) => (entryRefs.current[index] = el)}
              className={styles.experienceContainer}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.desktopExperienceDetails}>
                <p>{date}</p>
                <h3>{company}</h3>
                <p>{title}</p>
              </div>
              <div className={styles.timelineContainer}>
                <div
                  className={`${styles.circle} ${
                    !isCurrent && styles.circleFilled
                  }`}
                />
                <div className={styles.line} />
              </div>
              <div className={styles.experienceDetails}>
                <div className={styles.experienceHeaderContainer}>
                  <h3>{company}</h3>
                  <p>{date}</p>
                </div>
                <p>{title}</p>
                <p>{jobDescription}</p>
              </div>
            </div>
          );
        },
      )}
    </section>
  );
};

export default Career;
