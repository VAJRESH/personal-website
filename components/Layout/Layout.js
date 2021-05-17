import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MetaData from "../MetaData/MetaData";

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
          { name: "Get In Touch", path: "/contact" },
          { name: "Projects", path: "/projects" },
        ]}
      />

      <main>{children}</main>

      <Footer></Footer>
    </div>
  );
}
