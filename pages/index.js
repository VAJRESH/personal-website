import AboutMe from "../components/AboutMe/AboutMe";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Layout from "../components/Layout/Layout";
import FeaturedProjects from "../components/Projects/FeaturedProjects";

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <FeaturedProjects />
      <GetInTouch />
    </Layout>
  );
}
