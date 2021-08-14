import Link from "next/link";
import { useEffect, useRef } from "react";

import ScrollButton from "./ScrollButton/ScrollButton";
import Skills from "./Skills/Skills";
import data from './Data/data.json';
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  const titleRef = useHoverTextAnimation();

  return (
    <div className={`container ${styles.hero}`} dir="ltr" id="Home">
      <section className={`${styles.aboutMe}`}>
        <div className={`${styles.leftSide}`}>
          <h1 ref={titleRef}>{data.title}</h1>

          <article>
            <p>{ data.intro }</p>
          </article>

          <Link href="/projects">
            <a>
              <div className="btn-link">See My Work</div>
            </a>
          </Link>
        </div>

        <div className={`${styles.rightSide}`}>
          <Skills />
        </div>
      </section>

      <ScrollButton />
    </div>
  );
}

// custom hook which adds the animation in the h1 tag text
function useHoverTextAnimation() {
  const title = useRef();

  useEffect(() => {
    if (title.current) {
      const textArray = splitTextInSpans();
      let i = 0,
        r = 0,
        g = 144,
        b = 243;
      
      const timer = setInterval(() => {
        addBounceEffect(i, [r, g, b]);
        i++;
        g -= 10;
        b -= 5;

        if (i === textArray.length) {
          clearInterval(timer);
          console.log("done");
          return;
        }
      }, 50);
      addMouseHoverEvent();
    }
  }, [title]);

  function splitTextInSpans() {
    const text = title.current.textContent;
    const textArray = text.split("");
    title.current.innerHTML = "";

    textArray.forEach((item) => {
      if (item === " ") {
        return (title.current.innerHTML += `<span>&nbsp;</span>`);
      }
      title.current.innerHTML += `<span>${item}</span>`;
    });

    return textArray;
  }

  function addMouseHoverEvent() {
    title.current.childNodes.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.add(styles.flip);

        setTimeout(() => {
          element.classList.remove(styles.flip);
        }, 800);
      });
    });
  }

  function addBounceEffect(i, colorCode) {
    const [red, green, blue] = colorCode;
    title.current.childNodes[i].classList.add(styles.bounce);
    title.current.childNodes[i].style.color = `rgb(${red}, ${green}, ${blue})`;
  }

  return title;
}
