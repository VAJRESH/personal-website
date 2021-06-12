import Image from "next/image";
import Link from "next/link";
import Card from "./Card/Card";
import data from "./Data/data.json";
import styles from "./FeaturedProjects.module.scss";

export default function FeaturedProjects() {
  const projects = data.projects;

  return (
    <div className={`container ${styles.featuredProjects}`}>
      <h1>Projects</h1>
      <section className={styles.projects}>
        {projects.map((project) => {
          return (
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
          );
        })}
      </section>
      <Link href='/projects'>
        <a className={styles.moreProjects}>More Projects</a>
      </Link>
    </div>
  );
}
