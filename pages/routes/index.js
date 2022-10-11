import Head from "next/head";
import Header from "../../components/header";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import routeData from "../../public/routes";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

let regions = {};

Object.keys(routeData).forEach((routeID) => {
  const route = routeData[routeID];
  const region = capitalizeFirstLetter(route.region);
  if (!regions[region]) {
    regions[region] = [];
  }
  regions[region].push(route);
});

const Routes = () => {
  return (
    <>
      <Head>
        <title>Routes | Better Connects US</title>
        <meta
          name="description"
          content="An unofficial but better site showing off Amtrak's Connects US plan."
        />

        <meta property="og:url" content="https://amtrak.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Routes | Better Connects US" />
        <meta
          property="og:description"
          content="An unofficial but better site showing off Amtrak's Connects US plan."
        />
        <meta property="og:image" content="https://amtrak.site/cover.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="amtrak.site" />
        <meta property="twitter:url" content="https://amtrak.site/" />
        <meta name="twitter:title" content="Routes | Better Connects US" />
        <meta
          name="twitter:description"
          content="An unofficial but better site showing off Amtrak's Connects US plan."
        />
        <meta name="twitter:image" content="https://amtrak.site/cover.png" />
      </Head>
      <h1 className={styles.centerText}>Better Amtrak Connects US Guide</h1>
      <Header />
      <main className={styles.main}>
        <h2>Routes</h2>
        <p>
          Below is a list of the various Connects US routes split up by region.
          To view more information about a route, click on the accompanying
          link. Each page will go more in depth about each route including
          stops, timings, and frequencies (both planned and current).
        </p>

        {Object.keys(regions).map((region) => {
          return (
            <div key={region}>
              <h3>{region}</h3>
              <section className={styles.routesList}>
                {regions[region].map((route) => {
                  return (
                    <p key={route.routeID}>
                      <Link href={`/routes/${route.routeID}`}>
                        <a>
                          <b>{route.routeName}</b>
                          <br />
                        </a>
                      </Link>
                      <i className={styles.indentedSmaller}>
                        {route.stops.all.stations
                          .filter((station) => {
                            return route.mainStations.includes(station);
                          })
                          .join(" - ")}
                      </i>
                    </p>
                  );
                })}
              </section>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Routes;
