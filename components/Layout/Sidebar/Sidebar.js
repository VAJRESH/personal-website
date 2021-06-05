import styles from "./Sidebar.module.scss";

export default function Sidebar({ internalLinks }) {
  return (
    <aside className={styles.sidebar}>
      {internalLinks.map((links) => {
        return (
          <>
            <div className={styles.sidebarIcon}>
              <Image src={links.icon} alt="" height={20} width={20} />
            </div>
            <div className={styles.tooltip}>
              <span>{link.title}</span>
            </div>
          </>
        );
      })}
    </aside>
  );
}
