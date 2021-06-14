import Link from "next/link";
import { useEffect, useRef } from "react";

import ScrollButton from "./ScrollButton/ScrollButton";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  const titleRef = useHoverTextAnimation();

  return (
    <div className={`container ${styles.hero}`} dir="ltr" id="Home">
      <h1 ref={titleRef}>
        {/* Hi, I'm Vajresh!! */}
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
      </h1>

      <article>
        <p>Web Developer who is passionate</p>
        <p>about creating and</p>
        <p>developing solutions.</p>
      </article>

      <Link href="/projects">
        <a>
          <div className='btn-link'>See My Work</div>
        </a>
      </Link>

      <ScrollButton />
    </div>
  );
}



// custom hook which adds the animation in the h1 tag text
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
