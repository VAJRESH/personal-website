import styles from './ScrollButton.module.scss';
import Image from "next/image";

export default function ScrollButton() {
    return (
        <div className={styles.scrollDown}>
            {/* Double down by Alfonso Juan Dillera from the Noun Project */}
            {/* <button className={styles.scrollDown}>Scroll</button> */}
            <Image src='/assets/scroll-down.svg' height={40} width={40} alt='Scroll Down'/>
        </div>
    )
}