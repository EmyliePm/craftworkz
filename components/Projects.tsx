import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.heading}>Recent Work</h2>

        <p className={styles.description}>
          A selection of property maintenance, repairs and improvement projects.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
