import Image from "next/image";

import Card from './Card/Card';
import useFilterProjects from "./Logic/filterProjects";
import styles from "./Projects.module.scss";

const tagLists = ["HTML", "CSS", "JavaScript", "React Js", "Node JS"];
const projects = [
  {
    title: "Media Tracker",
    imagePath: "/assets/media-tracker.PNG",
    tags: ["React Js", "JavaScript", "HTML"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Minus quis sed, iure inventore nulla aspernatur alias dolorem nemo asperiores, tempora, labore assumenda corporis doloribus. Modi culpa dolor beatae vero quibusdam!",
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

export default function Projects() {
  const [filterByText, filteredProjects, tags, selectedTags, selectTag, unselectTag] =
    useFilterProjects(projects, tagLists);

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <section className={styles.filterBox}>
        <div className={styles.searchBar}>
          <input type="search" id="search" onChange={filterByText} placeholder="Search" />
          <label htmlFor="search" className={styles.label}>
            Search
          </label>
        </div>

        <div className={styles.tags}>
          {selectedTags.map((tag, index) => {
            // Cross by ProSymbols from the Noun Project
            return (
              <span
                key={tag}
                onClick={() => unselectTag(index)}
                className={styles.selectedTag}
              >
                {tag}
                <Image src="/assets/cross.svg" alt="" height={20} width={20} />
              </span>
            );
          })}
          {tags.map((tag, index) => {
            return (
              <span key={tag} onClick={() => selectTag(index)}>
                {tag}
              </span>
            );
          })}
        </div>
      </section>

      <section className={styles.cardContainer}>
        <h2>Total Projects ({filteredProjects.length})</h2>

        {filteredProjects.map((project) => {
          return (
            <Card
              title={project.title}
              imagePath={project.imagePath}
              tags={project.tags}
              description={project.description}
              sourceCodePath={project.sourceCodePath}
              liveDemoPath={project.liveDemoPath}
              key={project.title}
            />
          );
        })}
      </section>
    </div>
  );
}
