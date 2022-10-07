import routeData from "../../public/routeData/data";
import Dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";

const MapWithNoSSR = Dynamic(() => import("../../components/map"), {
  ssr: false,
});

export async function getStaticPaths() {
  const paths = Object.keys(routeData).map((route) => {
    return {
      params: {
        routeID: route,
      },
    };
  });
  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  return {
    props: {
      routeID: params.routeID,
      data: routeData[params.routeID],
    },
  };
}

const Route = (params) => {
  const { routeID, data } = params;

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1 className={styles.centerText}>Better Amtrak Connects US Guide</h1>
      <Header />

      <main className={styles.main}>
        <p>Post: {routeID}</p>
        <div>{JSON.stringify(data, null, 2)}</div>
        <h2>Map of Route:</h2>
        <MapWithNoSSR />
      </main>
    </>
  );
};

export default Route;
