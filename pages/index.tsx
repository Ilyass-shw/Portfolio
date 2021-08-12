import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ProfilButtons from "../components/ProfilButtons/ProfilButtons";
import SocialMediaBtns from "../components/SocialMediaBtns/SocialMediaBtns";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ilyass Fourkani</title>
      </Head>

      <main>
        <Header />
        <Hero />
        <ProfilButtons />
        <SocialMediaBtns />
      </main>

      <footer></footer>
    </div>
  );
}
