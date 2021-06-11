import Card from "./Card/Card";
import data from "./Data/data.json";
import styles from "./Projects.module.scss";

export default function FeaturedProjects() {
  const projects = data.projects;

  return (
    <div className={`container ${styles.featuredProjects}`}>
      {projects.map((project) => {
        return (
          <Card
            key={project.title}
            title={project.title}
            logoPath={project.logoPath}
            bannerPath={project.bannerPath}
            tags={project.tags}
            description={project.description}
            sourceCodePath={project.sourceCodePath}
            liveDemoPath={project.liveDemoPath}
          />
        );
      })}
    </div>
  );
}
