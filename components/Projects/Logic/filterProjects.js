import { useEffect, useState } from "react";

export default function useFilterProjects(projects = [], tagsList = []) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState(tagsList);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filterProjects = projects.filter((project) => {
      let isTagPresent = true;

      // loops through the projects tag and
      // selected tags and check if at least one tag is present or not
      project.tags.some((projectTag) =>
        selectedTags.some((tag) => {
          isTagPresent = tag === projectTag;

          return isTagPresent;
        })
      );

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
      const inputText = e.target.value.trim();

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