import { useRef, useCallback, useState } from "react";
import Image from "next/image";
import styles from "./GetInTouch.module.scss";

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
        <section className={isElementVisible ? styles.fadeIn : ""}>
          {/* Tooltip credits */}
          {/* call by FMF Design from the Noun Project */}
          <Image src="/assets/call.svg" height={60} width={60} alt="Call" />
          <article>
            <h2>Talk to Me</h2>
            <p>
              Interested in my projects?
              <wbr /> Just pick up the phone.
            </p>
            <a href="tel:+91-8356085124">
              <div className={styles.callNow}>
              Call Now
              </div>
              </a>
          </article>
        </section>
        <section className={isElementVisible ? styles.fadeIn : ""}>
          {/* Tooltip credits */}
          {/* chat by i cons from the Noun Project */}
          <Image src="/assets/chat.svg" height={50} width={50} alt="Chat" />
          <article>
            <h2>Chat with Me</h2>
            <p>
              Sometimes you need a little help!
              <wbr /> Connect with me.
            </p>
          </article>
          <div>
            <div className={styles.chatNow}>
              <div className={`${styles.icon} ${styles.first}`}>F</div>
              <div className={styles.icon}>G</div>
              <div className={styles.icon}>E</div>
              <div className={`${styles.icon} ${styles.last}`}>W</div>
              <div className={styles.label}>Chat Now</div>
            </div>
            <ul>
              <li>
                <a href="mailto:vajresh005@gmail.com">G</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
