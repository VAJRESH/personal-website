import AboutMe from "../components/AboutMe/AboutMe";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <GetInTouch />
    </Layout>
  );
}
