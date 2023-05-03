import React from "react";
import styles from "../styles/Work.module.css";
import projects from "../../public/projects.json";
import Image from "next/image";

export default function Work() {
  const allProjects = projects.data;

  interface Project  {
    title: string;
    description: string;
    image: string;
    featured: boolean;
  }

  function buildCard(project: Project) {
    return (
      <div key={project.title} className={styles.card}>
        <Image src={project.image} fill alt={project.description}></Image>
        <div className={styles.hoverCaption}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    );
  }

  const featuredProjects = allProjects.map((e) => {
    if (e.featured == true) {
      return (
        buildCard(e)
      );
    }
  });

  const openSourceProjects = allProjects.map((e) => {
    if (e.featured == false) {
      return (
        buildCard(e)
      );
    }
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Portfolio</h1>
      <section>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <ul className={styles.projectCards}>{featuredProjects}</ul>
      </section>
      <section>
        <h2 className={styles.sectionTitle}>Open Source Projects</h2>
        <ul className={styles.projectCards}>{openSourceProjects}</ul>
      </section>
    </main>
  );
}
