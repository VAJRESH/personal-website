import Image from "next/image";

export default function ContactBox({ boxClassName, image, title, text, children }) {
  return (
    <section className={boxClassName}>
      <Image
        src={image.path}
        height={image.height}
        width={image.width}
        alt={image.alt}
      />

      <article>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>

      {children}
    </section>
  );
}
