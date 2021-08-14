import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import { useElementInView } from "../../../helper/hooks";
import data from '../Data/data.json';
import styles from "./Skills.module.scss";

const Skills = () => {
  const { callbackHook } = useSkills();

  return <div className={`skillsContainer`} ref={callbackHook}></div>;
};

function useSkills() {
  const [callbackHook, element] = useElementInView((entries) => {
    if (entries[0].isIntersecting) {
      element.current.sphere.resume();
    } else {
      // pause the rotation if not in view
      element.current.sphere.pause();
    }
  });

  useEffect(() => {
    let instance;

    if (!element) element = {};
    if (!element.current.sphere) {
      instance = createSkillsSphere();
    }

    element.current.sphere = instance;
    console.log(element.current);
    setStylesToSkills();
  }, []);

  function createSkillsSphere() {
    const container = ".skillsContainer";
    const texts = data.skills;
    const options = {
      radius: 200,
      maxSpeed: "fast",
      containerClass: "skillCloud",
      itemClass: "skills",
    };

    switch (true) {
      case window.innerWidth < 350:
        options.radius = 120;
        break;

      case window.innerWidth < 450:
        options.radius = 150;
        break;

      case window.innerWidth > 2000:
        options.radius = 300;
        break;

      case window.innerWidth > 2560:
        options.radius = 350;
        break;

      default:
        break;
    }

    return TagCloud(container, texts, options);
  }

  function setStylesToSkills() {
    if (!element.current) return;

    element.current.sphere.items.forEach((item) => {
      item.el.style.fontWeight = "600";
    });
  }

  return { callbackHook };
}

export default Skills;
