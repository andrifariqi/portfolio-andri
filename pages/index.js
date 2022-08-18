import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Andri</title>
      </Head>
      <div>
        <Hero /> <Navbar /> <About /> <Skills /> <Projects /> <Contact /> <Footer />
      </div>
    </div>
  );
}
