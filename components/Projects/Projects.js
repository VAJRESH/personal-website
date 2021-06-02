import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

function useFilterProjects(projects = [], tagsList = []) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState(tagsList);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filterProjects = projects.filter((project) => {
      let isTagPresent = true;

      // loops through the projects tag and 
      // selected tags and check if at least one tag is present or not
      project.tags.some((projectTag) => (
        selectedTags.some((tag) => {
          isTagPresent = (tag === projectTag);

          return isTagPresent;
        })
      ))

      return isTagPresent;
    });

    setFilteredProjects(filterProjects);
  }, [selectedTags]);

  function selectTag(index) {
    const allSelectedTags = [...selectedTags];
    const newSelectedTag = tags[index];

    allSelectedTags.push(newSelectedTag);
    const filterSelectedTag = tags.filter((tag) => tag !== newSelectedTag);

    setTags(filterSelectedTag);
    setSelectedTags(allSelectedTags);
  }

  function unselectTag(index) {
    const allTags = [...tags];
    const unselectedTag = selectedTags[index];

    const removeUnselectedTag = selectedTags.filter(
      (tag) => tag !== unselectedTag
    );
    allTags.push(unselectedTag);

    setTags(allTags);
    setSelectedTags(removeUnselectedTag);
  }

  function filterByText(e) {
    const filterProjects = projects.filter((project) => {
      const inputText = e.target.value;
      
      return project.title.toLowerCase().includes(inputText.toLowerCase());
    });

    setFilteredProjects(filterProjects);
  }

  return [
    filterByText,
    filteredProjects || [],
    tags || [],
    selectedTags || [],
    selectTag,
    unselectTag,
  ];
}

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
