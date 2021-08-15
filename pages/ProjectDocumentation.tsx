import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import LayoutPreview from "../components/LayoutPreview/LayoutPreview";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ilyass Fourkani</title>
      </Head>

      <main>
        <Header />
        <LayoutPreview/>
      </main>

      <footer></footer>
    </div>
  );
}
