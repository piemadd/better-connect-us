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
    fetch('./shapes.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.features)
        setFeatures(data.features);
      });
  }, []);

  return (
    <>
    <Head>
      <title>Better Connects US</title>
    </Head>
      <h1 className={styles.centerText}>Welcome!</h1>

      <Header />

      <main className={styles.main}>
        <p>
          This is an unofficial, but improved, version of{" "}
          <Link href={"https://www.amtrakconnectsus.com"}>
            <a>
              Amtrak&apos;s official Connects US Map
            </a>
          </Link>
          . It is intended to provide more information while being easier to
          use. You can read more about this side project by clicking the &quot;About&quot;
          button above, scroll around the map below, or view a list of routes by
          clicking the &quot;Routes&quot; tab above.
        </p>

        <h2>Map</h2>
        <MapWithNoSSR features={features} />
      </main>
    </>
  );
}
