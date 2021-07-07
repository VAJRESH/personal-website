import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./Card.module.scss";

function useManageDetails() {
  const [isMouseOver, setMouseOver] = useState();

  function handleClick(e, isModal) {
    e.stopPropagation(); 
    console.log("s", isModal);
    if (isModal) return;

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
    <section className={styles.card} onClick={(e) => handleClick(e, false)}>
      {bannerPath ? (
        <img
          src={bannerPath}
          alt={title}
          className={styles.img}
        />
      ) : (
        <div className={styles.img}>Image</div>
      )}
      <h4>{title}</h4>

      <div className={isMouseOver ? styles.modalForDetails : styles.hideModal}>
        <section className={styles.modalContent}>
          {bannerPath ? (
            <img
              src={bannerPath}
              alt={title}
              className={styles.modalImage}
            />
          ) : (
            <div className={styles.modalImage}>Image</div>
          )}
          <div className={styles.details} onClick={(e) => handleClick(e, true)}>
            <span className={styles.closeModal} onClick={(e) => handleClick(e, false)}>
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
                <a href={sourceCodePath} target='_blank'>View Code</a>
                <a href={liveDemoPath} target='_blank'>Demo</a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

