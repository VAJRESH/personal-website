import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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

function useFilterProjects(tagsList = []) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState(tagsList);

  function handleClick(e, index) {
    console.log(e.target, index);

    const allSelectedTags = [...selectedTags];
    const newSelectedTag = tags[index];

    allSelectedTags.push(newSelectedTag);
    const filterSelectedTag = tags.filter((tag) => (tag !== newSelectedTag));

    setTags(filterSelectedTag);
    setSelectedTags(allSelectedTags);
  }

  return [tags, selectedTags || [], handleClick];
}


const tagLists = ["HTML", "CSS", "JavaScript", "React Js", "Node JS"];
const projects = [
  {
    title: "Media Tracker",
    imagePath: "/assets/media-tracker.PNG",
    tags: ["React Js", "JavaScript", "HTML"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Minus quis sed, iure inventore nulla aspernatur alias dolorem nemo asperiores, tempora, labore assumenda corporis doloribus. Modi culpa dolor beatae vero quibusdam!",
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
  const [tags, selectedTags, handleClick] = useFilterProjects(tagLists);


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
          {selectedTags.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
          {tags.map((tag, index) => {
            return <span key={tag} onClick={(e) => handleClick(e, index)}>{tag}</span>;
          })}
        </div>
      </section>

      <section className={styles.cardContainer}>
        <h2>Total Projects ({projects.length})</h2>

        {projects.map((project) => {
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
