import Image from "next/image";
import Link from "next/link";

import styles from "../Projects.module.scss";

export default function Card({
  title,
  status,
  logoPath,
  bannerPath,
  tags,
  description,
  sourceCodePath,
  liveDemoPath,
}) {
  return (
    <section className={styles.card}>
      {
        bannerPath?
          <Image src={bannerPath} alt={title} height={150} width={200} className={styles.img}/> :
          <div className={styles.img}>Image</div>
      }
      {/* add logo at the center inside circle and main image as banner */}
      <div className={styles.logo}>
        {logoPath ? (
          <Image src={logoPath} alt="" height={20} width={20} />
        ) : (
          "Logo"
        )}
      </div>
      <h4>{title}</h4>
      <article>{description}</article>

      <div className={styles.tags}>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </div>

      <div className={styles.actions}>
        <Link href={sourceCodePath}>
          <a>View Code</a>
        </Link>
        <Link href={liveDemoPath}>
          <a>Demo</a>
        </Link>
      </div>
    </section>
  );
}
