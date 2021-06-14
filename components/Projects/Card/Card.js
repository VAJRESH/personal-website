import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./Card.module.scss";

function useManageDetails() {
  const [isMouseOver, setMouseOver] = useState();

  function handleClick() {
    console.log("s");
    setMouseOver(!isMouseOver);
  }

  return [handleClick, isMouseOver];
}

export default function Card({
  title,
  type,
  bannerPath,
  tags,
  description,
  sourceCodePath,
  liveDemoPath,
}) {
  const [handleClick, isMouseOver] = useManageDetails();

  return (
    <section className={styles.card} onClick={handleClick}>
      {bannerPath ? (
        <Image
          src={bannerPath}
          alt={title}
          height={150}
          width={200}
          className={styles.img}
        />
      ) : (
        <div className={styles.img}>Image</div>
      )}
      <h4>{title}</h4>

      <div className={isMouseOver ? styles.modalForDetails : styles.hideModal}>
        <section className={styles.modalContent}>
          {bannerPath ? (
            <Image
              src={bannerPath}
              alt={title}
              height={150}
              width={200}
              className={styles.modalImage}
            />
          ) : (
            <div className={styles.modalImage}>Image</div>
          )}
          <div className={styles.details}>
            <span className={styles.closeModal}>
              <Image src='/assets/cross.svg' alt='' height={30} width={30} />
            </span>

            <p className={styles.type}>{type}</p>
            <h2>{title}</h2>
            <div className="tags">
              {tags.map((tag) => {
                return <span key={tag}>{tag}</span>;
              })}
            </div>
            <article>
              <h3>Description</h3>
              <p>{description}</p>
            </article>

            <div className={styles.actions}>
              <Link href={sourceCodePath}>
                <a>View Code</a>
              </Link>
              <Link href={liveDemoPath}>
                <a>Demo</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
