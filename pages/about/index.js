import Head from "next/head";
import Header from "../../components/header";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1 className={styles.centerText}>Better Amtrak Connects US Guide</h1>
      <Header />

      <main className={styles.main}>
        <h2>About</h2>

        <h3>
          <i>Who</i> made this?
        </h3>
        <p>
          Hi, I&apos;m{" "}
          <Link href={"https://piemadd.com"}>
            <a>Piero</a>
          </Link>
          , a programmer and transit advocate based out of Chicago. If my name
          sounds familiar, you might know about my Amtrak train tracker called{" "}
          <Link href={"https://amtraker.com/"}>
            <a>Amtraker</a>
          </Link>
          .
        </p>

        <h3>
          <i>What</i> is Connects US?
        </h3>
        <p>
          Connects US is Amtrak&apos;s plan for expanding rail service in the United
          States by 2035. This plan calls for at least 212 new round trips on
          Amtrak&apos;s network.
        </p>

        <h3>
          <i>Why</i> did you build this?
        </h3>
        <p>
          If you&apos;ve ever tried using{" "}
          <Link href={"https://www.amtrakconnectsus.com"}>
            <a>Amtrak&apos;s official Connects US Site</a>
          </Link>
          , you&apos;ll know it is fairly convoluted and hard to use. Because of
          this, I decided to make my own version of the site which provides the
          same information in a format which is much easier to read and parse.
        </p>

        <h3>
          <i>How</i> is it built?
        </h3>
        <p>
          For those of you more interested in the technical side of things, this
          site is built using Next.js (a React.js library) with data manually
          extracted from Amtrak&apos;s official Connects US site. The site is hosted
          on Vercel. You should be able to view the source code{" "}
          <Link href={"https://github.com/piemadd/better-connect-us"}>
            <a>here</a>
          </Link>
          .
        </p>
      </main>
    </>
  );
}
