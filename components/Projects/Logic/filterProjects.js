import { useEffect, useState } from "react";

function sortByCategory(projects) {
  return projects.sort((p1, p2) => {
    if (p1.category === p2.category) return 0;

    return p1.category > p2.category ? 1 : -1;
  });
}

export default function useFilterProjects(projects = []) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // set the tags to filter out projects dynamically from the projects tag
  useEffect(() => {
    let tagList = [];
    for (let project of projects) {
      tagList.push(...project.tags);
    }
    tagList = [...new Set(tagList)];

    setTags(tagList);
  }, []);

  // filters out projects when tags are selected
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

    // sort the projects based on categories
    let sortFilteredProjects = sortByCategory(filterProjects);

    setFilteredProjects(sortFilteredProjects);

    // setFilteredProjects(filterProjects);
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

    const sortFilteredProjects = sortByCategory(filterProjects);
    setFilteredProjects(sortFilteredProjects);
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
