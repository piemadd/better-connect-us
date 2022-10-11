import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MapWithNoSSR = Dynamic(() => import("../components/map"), {
  ssr: false,
});

export default function Home() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("./shapes.json")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data.features);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Better Connects US</title>
        <meta
          name="description"
          content="An unofficial but better site showing off Amtrak's Connects US plan."
        />

        <meta property="og:url" content="https://amtrak.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Better Connects US" />
        <meta
          property="og:description"
          content="An unofficial but better site showing off Amtrak's Connects US plan."
        />
        <meta property="og:image" content="https://amtrak.site/cover.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="amtrak.site" />
        <meta property="twitter:url" content="https://amtrak.site/" />
        <meta name="twitter:title" content="Better Connects US" />
        <meta
          name="twitter:description"
          content="An unofficial but better site showing off Amtrak's Connects US plan."
        />
        <meta name="twitter:image" content="https://amtrak.site/cover.png" />
      </Head>
      <h1 className={styles.centerText}>Welcome!</h1>

      <Header />

      <main className={styles.main}>
        <p>
          This is an unofficial, but improved, version of{" "}
          <Link href={"https://www.amtrakconnectsus.com"}>
            <a>Amtrak&apos;s official Connects US Map</a>
          </Link>
          . It is intended to provide more information while being easier to
          use. You can read more about this side project by clicking the
          &quot;About&quot; button above, scroll around the map below, or view a
          list of routes by clicking the &quot;Routes&quot; tab above.
        </p>

        <h2>Map</h2>
        <MapWithNoSSR features={features} />
      </main>
    </>
  );
}
