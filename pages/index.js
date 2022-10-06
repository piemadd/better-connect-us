import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Dynamic from "next/dynamic";

const MapWithNoSSR = Dynamic(() => import("../components/map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <h1 className={styles.centerText}>Welcome!</h1>

      <Header />

      <main className={styles.main}>
        <p>
          This is an unofficial, but improved, version of{" "}
          <Link href={"https://www.amtrakconnectsus.com"}>
            <a>
              Amtrak's official Connects US Map
            </a>
          </Link>
          . It is intended to provide more information while being easier to
          use. You can read more about this side project by clicking the "About"
          button above, scroll around the map below, or view a list of routes by
          clicking the "Routes" tab above.
        </p>

        <h2>Map</h2>
        <MapWithNoSSR />
      </main>
    </>
  );
}
