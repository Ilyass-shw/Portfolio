import Head from "next/head";
import BestProjects from "../components/BestProjects/BestProjects";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ilyass Fourkani</title>
      </Head>

      <main>
        <Header />
        <HeroSection />
        <BestProjects />
        <Skills />
      </main>

      <footer></footer>
    </div>
  );
}
