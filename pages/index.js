import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.centerText}>Better Amtrak Connects US Guide</h1>

      <main className={styles.main}>
        <h2>About</h2>
        <p>
          If you've ever tried using <Link href={'https://www.amtrakconnectsus.com'}><a>Amtrak's official Connects US Site</a></Link>,
          you'll know it is fairly convoluted and hard to use. Because of this,
          I decided to make my own version of the site which provides the same
          information in a much easier format.
        </p>
      </main>
    </>
  );
}
