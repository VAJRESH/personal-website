import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";

function Card(props) {
  const { title, imagePath, tags, description, sourceCodePath, liveDemoPath } =
    props;
  return (
    <section className={styles.card}>
      {/* add project status like complete, in progress, not started */}
      <Image src={imagePath} alt={title} height={150} width={200} />
      {/* add logo at the center inside circle and main image as banner */}
      <h3>{title}</h3>
      <article>{description}</article>
      <div className={styles.tags}>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </div>
      <div className={styles.actions}>
        <Link href={sourceCodePath}>
          <a>View Code</a>
        </Link>
        <Link href={liveDemoPath}>
          <a>Demo</a>
        </Link>
      </div>
    </section>
  );
}

export default function Projects() {
  const tags = ["HTML", "CSS", "JavaScript", "React Js"];
  const projects = [
    {
      title: "Media Tracker",
      imagePath: "/assets/media-tracker.PNG",
      tags: ["React Js", "JavaScript", "HTML"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      sourceCodePath: "#",
      liveDemoPath: "#",
    },
    {
      title: "Project 2",
      imagePath: "/assets/chat.svg",
      tags: ["React Js", "JavaScript", "HTML"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      sourceCodePath: "#",
      liveDemoPath: "#",
    },
  ];

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <section className={styles.filterBox}>
        <div className={styles.searchBar}>
          <input type="search" id="search" placeholder="Search" />
          <label htmlFor="search" className={styles.label}>
            Search
          </label>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
      </section>
      <section className={styles.cardContainer}>
        <h2>Total Projects (0)</h2>
        {projects.map((project) => {
          return (
            <Card
              title={project.title}
              imagePath={project.imagePath}
              tags={["React Js", "JavaScript", "HTML"]}
              description="
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur iure cupiditate odio!
                Explicabo, perspiciatis praesentium!"
              sourceCodePath="#"
              liveDemoPath="#"
              key={project.title}
            />
          );
        })}
      </section>
    </div>
  );
}
