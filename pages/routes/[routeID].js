import routeData from "../../public/routeData/data";
import Dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";

const figs = {
  money: ["up to $25", "$25 to $50", "over $50"],
  passengers: [
    "up to 10,000",
    "10,000 to 20,000",
    "20,000 to 30,000",
    "over 30,000",
  ],
  infrastructure: ["up to $250", "$250 to $500", "over $500"],
};

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
  let { data } = params;

  const existed = data.trips.pee.length > 0;

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1 className={styles.centerText}>Better Amtrak Connects US Guide</h1>
      <Header />

      <main className={styles.main}>
        <h2>{data.routeName}</h2>
        <p>
          The {data.routeName} line is {existed ? "an existing" : "a planned"}{" "}
          route running {data.mileage} miles from {data.stops.all.stations[0]}{" "}
          to {data.stops.all.stations.slice(-1)}, taking{" "}
          {data.stops.all.time.hours} hours and {data.stops.all.time.minutes}{" "}
          minutes over tracks owned by {data.hosts.slice(0, -1).join(", ")}
          {data.hosts.length > 2 ? "," : ""} and {data.hosts.slice(-1)}.
          Additionally, the primary section of the route runs between{" "}
          {data.stops.key.stations[0]} and {data.stops.key.stations.slice(-1)},
          while an initial investment of{" "}
          {figs.infrastructure[data.infraCostPerPassenger]} per passenger and a
          subsidy of {figs.money[data.fundingPerPassenger]} per passenger is
          projected to lead to {figs.passengers[data.newPassengers]} regular
          customers for this route.
        </p>

        <h3>Pre-pandemic Schedule:</h3>
        {data.trips.pee.length > 0 ? (
          <>
            {data.trips.pee.length > 1 ? (
              <>
                <p>
                  Before the pandemic, the following segments were in place:
                </p>
                <ul>
                  {data.trips.pee.map((trip) => {
                    //more than one distinct segment (see san joaquins)
                    return (
                      <li>
                        From {trip.stops[0]} to {trip.stops.slice(-1)} and back{" "}
                        {trip.trips} time{trip.trips.length > 1 ? "s" : ""} per
                        day.
                        {trip.extensions.map((extension) => {
                          //any extensions exist for this segment. i dont think this is used, but it is good to cover an edge case
                          return (
                            <li>
                              {extension.trips} train
                              {extension.trips.length > 1 ? "s" : ""} extend to{" "}
                              {extension.stops.slice(-1)} from{" "}
                              {extension.stops[0]}.
                            </li>
                          );
                        })}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <p>
                {/* only one segment */}
                Before the pandemic, this route ran from{" "}
                {data.trips.pee[0].stops[0]} to{" "}
                {data.trips.pee[0].stops.slice(-1)} and back{" "}
                {data.trips.pee[0].trips} time
                {data.trips.pee[0].trips > 1 ? "s" : ""} per day.{" "}
                {data.trips.pee[0].extensions.length > 0 ? (
                  <>
                    {/* more than 1 extension */}
                    {data.trips.pee[0].extensions.length > 1 ? (
                      <>
                        Addtionally, the following extensions were in effect for
                        the route:
                        <ul>
                          {data.trips.pee[0].extensions.map((extension) => {
                            return (
                              <li>
                                {extension.trips} train
                                {extension.trips > 1 ? "s" : ""} extended to{" "}
                                {extension.stops.slice(-1)} from{" "}
                                {extension.stops[0]}.
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <>
                        {/* just one extension */}
                        Additionally, the route had an extension from{" "}
                        {data.trips.pee[0].extensions[0].stops[0]} to{" "}
                        {data.trips.pee[0].extensions[0].stops.slice(-1)} which
                        ran {data.trips.pee[0].extensions[0].trips} per day.
                      </>
                    )}
                  </>
                ) : null}
              </p>
            )}
          </>
        ) : (
          /* route skill issue */
          <p>This route did not exist before the pandemic.</p>
        )}

        <h3>Stats for Nerds:</h3>
        <ul>
          <li>Route Length: {data.mileage} mi.</li>
          <li>
            Host Railroad{data.hosts.length > 1 ? "s" : ""}:{" "}
            {data.hosts.join(", ")}
          </li>
          <li>All Stops: {data.stops.all.stations.join(", ")}</li>
          <li>
            Full Runtime: {data.stops.all.time.hours}:
            {data.stops.all.time.minutes.toString().padStart(2, "0")}
          </li>
          <li>Key Stops: {data.stops.key.stations.join(", ")}</li>
          <li>
            Key Runtime: {data.stops.key.time.hours}:
            {data.stops.key.time.minutes.toString().padStart(2, "0")}
          </li>
        </ul>
        <div>{JSON.stringify(data, null, 2)}</div>
        <h2>Map of Route:</h2>
        <MapWithNoSSR />
      </main>
    </>
  );
};

export default Route;
