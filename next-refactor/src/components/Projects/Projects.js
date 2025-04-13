"use client";

import React, { useState } from "react";
import styles from "./Projects.module.css";
import { PROJECTS } from "../../constants/ProjectInfo";
import ProjectCard from "../Cards/ProjectCard";

const SECTIONS = [
  {
    title: "All",
  },
  {
    title: "Web",
  },
  {
    title: "Mobile",
  },
  {
    title: "AI",
  },
  {
    title: "Startup",
  },
  {
    title: "Other",
  },
];

const Projects = () => {
  const [selectedSection, setSelectedSection] = useState("All");

  const filterProjects = (project) => {
    if (selectedSection === "All") return true;
    console.log(project.categories);
    return project.categories.has(selectedSection);
  };

  const filteredProjects = PROJECTS.filter(filterProjects);
  return (
    <section className={`${styles.projectContainer} container`} id="projects">
      <div className={styles.projectHeadingContainer}>
        <h2 className="heading">My Projects</h2>
        <div className={styles.projectSections}>
          {SECTIONS.map(({ title, projectCategories }) => (
            <div
              key={title}
              className={`${styles.projectSection} ${
                title == selectedSection && styles.selected
              }`}
              onClick={() => setSelectedSection(title)}
            >
              <p className={styles.projectSectionTitle}>{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.projectCardsContainer}>
        {filteredProjects.map(
          ({
            title,
            description,
            imageSrc,
            categories,
            blogSlug,
            repoUrl,
            deployedUrl,
          }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              imageSrc={imageSrc}
              categories={categories}
              blogSlug={blogSlug}
              repoUrl={repoUrl}
              deployedUrl={deployedUrl}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
