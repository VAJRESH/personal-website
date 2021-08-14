import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.scss";

export default function Sidebar({ internalLinks }) {
  return (
    <aside className={styles.sidebar}>
      <div className={`${styles.observer}`}></div>
      <section className={`${styles.sidebarBox}`}>
        {internalLinks.map((link) => {
          return (
            <div className={styles.sideBarContainer} key={link.title}>
              <Link href={`#${link.title}`}>
                <a className={styles.sidebarIcon}>
                  {link.icon ? (
                    <Image src={link.icon} alt="" height={20} width={20} />
                  ) : (
                    <div>{link.title.charAt(0).toUpperCase()}</div>
                  )}
                </a>
              </Link>
              <div className={styles.tooltip}>
                <span>{link.title}</span>
              </div>
            </div>
          );
        })}
      </section>
    </aside>
  );
}
