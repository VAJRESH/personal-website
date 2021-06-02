import { useRef, useCallback, useState } from "react";

import ContactBox from "./ContactBox/ContactBox";
import styles from "./GetInTouch.module.scss";


export default function GetInTouch() {
  const [isElementVisible, slideIn] = useIsElementVisible();

  return (
    <div className={`container ${styles.contactUs}`} id="contact">
      <h1>Get In Touch</h1>

      <article>
        <p>Want to get in touch? I'd love to hear from you.</p>
        <p>Here's how you can reach me.</p>
      </article>

      <div className={styles.boxContainer} ref={slideIn}>
        <ContactBox
          boxClassName={isElementVisible ? styles.fadeIn : ""}
          image={{
            path: "/assets/call.svg",
            height: 60,
            width: 60,
            alt: "Call",
          }}
          title="Talk to Me"
          text={
            <>
              Interested in my projects?
              <wbr /> Just pick up the phone.
            </>
          }
        >
          <a href="tel:+91-8356085124">
            <div className={styles.callNow}>Call Now</div>
          </a>
        </ContactBox>

        <ContactBox
          boxClassName={isElementVisible ? styles.fadeIn : ""}
          image={{
            path: "/assets/chat.svg",
            height: 50,
            width: 50,
            alt: "Chat",
          }}
          title="Chat With Me"
          text={
            <>
              Sometimes you need a little help!
              <wbr /> Connect with me.
            </>
          }
        >
          <div className={styles.chatNow}>
            <div className={`${styles.icon} ${styles.first}`}>F</div>
            <div className={styles.icon}>G</div>
            <div className={styles.icon}>E</div>
            <div className={`${styles.icon} ${styles.last}`}>W</div>
            <div className={styles.label}>Chat Now</div>
          </div>
        </ContactBox>
      </div>
    </div>
  );
}
// TODO
{
  /* Tooltip credits */
}
{
  /* chat by i cons from the Noun Project */
}
{
  /* call by FMF Design from the Noun Project */
}


// custom hook which makes the element animate when visible
function useIsElementVisible() {
  const [isElementVisible, setIsElementVisible] = useState(false);

  const observer = useRef();
  const slideIn = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      setIsElementVisible(entries[0].isIntersecting);
    });

    if (node) observer.current.observe(node);
  }, []);

  return [isElementVisible, slideIn];
}
