import Link from "next/link";
import { useEffect, useRef } from "react";
import ScrollButton from "../ScrollButton/ScrollButton";
import styles from "./AboutMe.module.scss";

function useHoverTextAnimation() {
  const title = useRef();

  useEffect(() => {
    if (title.current) {
      title.current.childNodes.forEach((element) => {
        element.addEventListener("mouseover", () => {
          element.classList.add(styles.flip);

          setTimeout(() => {
            element.classList.remove(styles.flip);
          }, 800);
        });
      });
    }
  }, [title]);
  return title;
}
export default function AboutMe() {
  const titleRef = useHoverTextAnimation();

  return (
    <div className={`container ${styles.hero}`} dir="ltr" id="home">
      <h1 ref={titleRef}>
        <span>H</span>
        <span>i</span>
        <span>,&nbsp;</span>
        <span>I</span>
        <span>'m&nbsp;</span>
        <span>V</span>
        <span>a</span>
        <span>j</span>
        <span>r</span>
        <span>e</span>
        <span>s</span>
        <span>h</span>
        <span>!</span>
        <span>!</span>
        {/* Hi, I'm <span>Vajresh</span>!! */}
      </h1>
      <article>
        <p>Software Developer who is passionate</p>
        <p>about creating and</p>
        <p>developing solutions and</p>
        <p>work on amazing projects</p>
      </article>
      <Link href="/projects">
        <a>
          <div className={styles.link}>See My Work</div>
        </a>
      </Link>
      <ScrollButton />
    </div>
  );
}
