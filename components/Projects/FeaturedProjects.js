import Link from "next/link";
import Card from "./Card/Card";
import data from "./Data/data.json";
import styles from "./FeaturedProjects.module.scss";

export default function FeaturedProjects() {
  const projects = data.projects;

  if (projects.every((project) => !project.isFeatured)) return null;

  return (
    <div className={`container ${styles.featuredProjects}`} id='Projects'>
      <h1>Projects</h1>
      <section className={styles.projects}>
        {projects.map((project) => {

          // only featured projects are display and is determined in the data of the projects
          return project.isFeatured ? (
            <Card
              key={project.title}
              title={project.title}
              type={project.category}
              logoPath={project.logoPath}
              bannerPath={project.bannerPath}
              tags={project.tags}
              description={project.description}
              sourceCodePath={project.sourceCodePath}
              liveDemoPath={project.liveDemoPath}
            />
          ) : null;
        })}
      </section>
      <Link href="/projects">
        <a className={`btn-link ${styles.moreProjects}`}>More Projects</a>
      </Link>
    </div>
  );
}