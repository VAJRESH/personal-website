import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MetaData from "../MetaData/MetaData";
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div>
      <MetaData title="Vajresh" />
      <Navbar
        brand={{
          name: "Vajresh",
          image: "/assets/logo.png",
        }}
        navLinks={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />

      <main className={styles.layoutContainer}>{children}</main>

      <Footer></Footer>
    </div>
  );
}
