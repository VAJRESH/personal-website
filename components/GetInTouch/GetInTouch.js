import ContactBox from "./ContactBox/ContactBox";
import useIsElementVisible from "./Logic/animation";
import styles from "./GetInTouch.module.scss";
import Image from "next/image";

const socialMediaLinks = [
  // {
  //   iconName: "instagram",
  //   link: "",
  // },
  {
    iconName: "twitter",
    link: "https://twitter.com/Vajreshh",
  },
  {
    iconName: "github",
    link: "https://github.com/VAJRESH",
  },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/vajresh-patkar-a0634b1aa/",
  },
];

export default function GetInTouch() {
  const [isElementVisible, slideIn] = useIsElementVisible();

  return (
    <div className={`container ${styles.contactUs}`} id="Contact">
      <h1>Get In Touch</h1>

      <article>
        <p>Want to get in touch? I'd love to hear from you.</p>
        <p>Here's how you can reach me.</p>
      </article>

      <div className={styles.boxContainer} ref={slideIn}>
        <ContactBox
          boxClassName={isElementVisible ? styles.fadeIn : ""}
          image={{
            path: "/assets/phone-call.svg",
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
            height: 60,
            width: 60,
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
            {socialMediaLinks.map((object) => {
              return (
                <div className={styles.icon} key={object.iconName}>
                  <a href={object.link} target="_blank">
                    <Image
                      src={`/assets/${object.iconName}-round.svg`}
                      alt=""
                      height={50}
                      width={50}
                    />
                  </a>
                </div>
              );
            })}
            {/* <div className={styles.icon}>G</div>
            <div className={styles.icon}>E</div>
            <div className={`${styles.icon}`}>W</div>
          */}
            <div className={styles.label}>Chat Now</div>
          </div>
        </ContactBox>
      </div>
    </div>
  );
}
