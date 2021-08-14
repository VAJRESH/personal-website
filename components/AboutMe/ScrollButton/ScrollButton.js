import styles from "./ScrollButton.module.scss";
import Image from "next/image";
import {
  useElementInView,
  useGetWindowDimensions,
} from "../../../helper/hooks";

export default function ScrollButton() {
  const [callbackRef, element, containerRef] = useElementInView((entries) => {
    if (!element.current) return;
    if (entries[0].isIntersecting) {
      containerRef.current.style.animation = "";
    } else {
      containerRef.current.style.animation = "none";
    }
  });

  const dimensions = useGetWindowDimensions();
  if (dimensions.width < 860) return <></>;

  return (
    <div className={styles.scrollDown} ref={containerRef}>
      {/* Double down by Alfonso Juan Dillera from the Noun Project */}
      {/* <button className={styles.scrollDown}>Scroll</button> */}
      <span ref={callbackRef}></span>
      <Image
        src="/assets/double-arrow-bottom.svg"
        height={40}
        width={40}
        alt=""
      />
    </div>
  );
}
