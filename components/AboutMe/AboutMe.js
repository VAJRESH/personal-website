import Link from "next/link";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
    return (
        <>
            <section className={ styles.hero }>
                <h1>Hi, I'm <span>Vajresh</span>!!</h1>
                <article>
                    <p>IT developer who is passionate about creating and</p>
                    <p>developing solutions and</p>
                    <p>work on amazing projects</p>
                </article>
                <div className={ styles.link }>
                    <Link href='/projects'>
                        <a>See My Work</a>
                    </Link>
                </div>
            </section>
        </>
    );
}
