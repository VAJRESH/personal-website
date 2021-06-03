import Image from "next/image";
import Link from "next/link";

import styles from '../Projects.module.scss';

export default function Card(props) {
  const { title, imagePath, tags, description, sourceCodePath, liveDemoPath } =
    props;

  return (
    <section className={styles.card}>
      {/* add project status like complete, in progress, not started */}
      <Image src={imagePath} alt={title} height={150} width={200} />
      {/* add logo at the center inside circle and main image as banner */}
      <h3>{title}</h3>
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
