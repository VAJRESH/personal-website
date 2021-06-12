import Image from "next/image";

import Card from "./Card/Card";
import useFilterProjects from "./Logic/filterProjects";
import data from "./Data/data.json";
import styles from "./Projects.module.scss";
import React from "react";

export default function Projects() {
  const [
    filterByText,
    filteredProjects,
    tags,
    selectedTags,
    selectTag,
    unselectTag,
  ] = useFilterProjects(data.projects);

  // variable for separating projects
  let category;

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <section className={styles.filterBox}>
        <div className={styles.searchBar}>
          <input
            type="search"
            id="search"
            onChange={filterByText}
            placeholder="Search"
          />
          <label htmlFor="search" className={styles.label}>
            Search
          </label>
        </div>

        <div className='tags'>
          {selectedTags.map((tag, index) => {
            // Cross by ProSymbols from the Noun Project
            return (
              <span
                key={tag}
                onClick={() => unselectTag(index)}
                className={styles.selectedTag}
              >
                {tag}
                <Image src="/assets/cross-symbol.svg" alt="" height={15} width={15} />
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
            <React.Fragment key={project.title}>
              {category !== project.category && (
                <h3>
                  {
                    (category =
                      category !== project.category ? project.category : null)
                  }
                </h3>
              )}
              <Card
                title={project.title}
                type={project.category}
                bannerPath={project.bannerPath}
                tags={project.tags}
                description={project.description}
                sourceCodePath={project.sourceCodePath}
                liveDemoPath={project.liveDemoPath}
              />
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
}
