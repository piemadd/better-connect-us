import Head from "next/head";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";

const Routes = () => {
  return (
    <>
      <Head>
        <title>Routes</title>
      </Head>
      <h1 className={styles.centerText}>Better Amtrak Connects US Guide</h1>
      <Header />
      <main className={styles.main}>
        <h2>Routes</h2>
        <p>Coming soon!</p>
      </main>
    </>
  );
};

export default Routes;
