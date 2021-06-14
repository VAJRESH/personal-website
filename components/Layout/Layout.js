import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MetaData from "./MetaData/MetaData";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.scss";

export default function Layout({ showSideBar, children }) {
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

      {
        showSideBar &&
        <Sidebar
          internalLinks={[
            {
              icon: "/assets/homepage.svg",
              title: "Home",
            },
            {
              icon: "/assets/bulb-lighting.svg",
              title: "Projects",
            },
            {
              icon: "/assets/contact-book.svg",
              title: "Contact",
            },
          ]}
        />
      }

      <main className={styles.layoutContainer}>{children}</main>

      <Footer></Footer>
    </div>
  );
}
