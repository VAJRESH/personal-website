import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import useShowMenu from "./Logic/showMenu";
import styles from "./Navbar.module.scss";

export default function Navbar({ brand, navLinks }) {
  const router = useRouter();
  const [showMenu, handleClick] = useShowMenu();

  return (
    <nav className={styles.navbar}>
      <section className={styles.brand}>
        <Image priority src={brand.image} height={50} width={50} alt="Logo" />
        <span>{brand.name}</span>
      </section>

      {/* menu bars visible at small screens */}
      <section
        className={showMenu ? styles.crossBars : styles.menuBars}
        onClick={handleClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </section>

      <section className={`${styles.navLinks} ${showMenu && styles.show}`}>
        {navLinks.map((link) => {
          return (
            <Link href={link.path} key={link.name}>
              <a className={router.pathname === link.path ? styles.active : ""}>
                {link.name}
              </a>
            </Link>
          );
        })}
      </section>
    </nav>
  );
}
