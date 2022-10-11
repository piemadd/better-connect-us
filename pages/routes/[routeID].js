import routeData from "../../public/routes";
import Dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";

import { JSONToHTMLTable } from "@kevincobain2000/json-to-html-table";

const figs = {
  money: ["up to $25", "$25 to $50", "over $50"],
  passengers: [
    "up to 10,000",
    "between 10,000 and 20,000",
    "between 20,000 and 30,000",
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

  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('../shapes.json')
      .then(response => response.json())
      .then(mapData => {
        const cleanedFeatures = mapData.features.filter((feature) => {
          return data.segments.includes(feature.properties.name)
        })

        setFeatures(cleanedFeatures);
      });
  }, []);

  return (
    <>
      <Head>
        <title>{data.routeName} | Better Connects US</title>
      </Head>
      <h1 className={styles.centerText}>Better Connects US</h1>
      <Header />

      <main className={styles.main}>
        <h2>{data.routeName}</h2>
        <p>
          The {data.routeName} train is{" "}
          {data.trips.pee.length > 0 ? "an existing" : "a planned"} route
          running {data.mileage} miles from {data.stops.all.stations[0]} to{" "}
          {data.stops.all.stations.slice(-1)}, taking{" "}
          {data.stops.all.time.hours} hours and {data.stops.all.time.minutes}{" "}
          minutes over tracks owned by {data.hosts.slice(0, -1).join(", ")}
          {data.hosts.length > 2 ? "," : ""}
          {data.hosts.length > 1 ? " and" : ""} {data.hosts.slice(-1)}, with the
          primary section of the route running between{" "}
          {data.stops.key.stations[0]} and {data.stops.key.stations.slice(-1)},
          taking {data.stops.key.time.hours} hours and{" "}
          {data.stops.key.time.minutes} minutes to complete. Additionally, an
          initial investment of{" "}
          {figs.infrastructure[data.infraCostPerPassenger]} per passenger and a
          subsidy of {figs.money[data.fundingPerPassenger]} per passenger is
          projected to lead to {figs.passengers[data.newPassengers]} regular
          customers for this route.
        </p>

        <h3>Map of Route:</h3>
        <MapWithNoSSR features={features}/>

        <h3>The Route:</h3>
        <p>
          Starting in {data.stops.all.stations[0]}, the train makes the
          following stops:
        </p>
        <ul>
          {data.stops.all.stations.map((station) => {
            return data.mainStations.includes(station) ? (
              <li key={`route-stops-${station}`}>
                <b>{station}</b>
              </li>
            ) : (
              <li key={`route-stops-${station}`}>
                <i>{station}</i>
              </li>
            );
          })}
        </ul>
        {data.stops.branches && data.stops.branches.length > 1 ? (
          <>
            <p>Additionally, the following branches exist for this route:</p>
            <ul>
              {data.stops.branches.map((branch) => {
                return (
                  <>
                    <li>
                      <b>{branch[0] - branch.slice(-1)}</b>
                      <ul>
                        {branch.map((station) => {
                          return data.mainStations.includes(station) ? (
                            <li>
                              <b>{station}</b>
                            </li>
                          ) : (
                            <li>
                              <i>{station}</i>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}
            </ul>
          </>
        ) : null}
        {data.stops.branches && data.stops.branches.length == 1 ? (
          <>
            <p>
              Additionally, a branch from {data.stops.branches[0][0]} to{" "}
              {data.stops.branches[0].slice(-1)} exists for this route:
            </p>
            <ul>
              {data.stops.branches[0].map((station) => {
                return data.mainStations.includes(station) ? (
                  <li>
                    <b>{station}</b>
                  </li>
                ) : (
                  <li>
                    <i>{station}</i>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}

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
                      <li key={`trips-pee-${trip.stops[0]}-${trip.stops.slice(-1)}`}>
                        From {trip.stops[0]} to {trip.stops.slice(-1)} and back{" "}
                        {trip.trips} time{trip.trips > 1 ? "s" : ""} per day.
                        {trip.extensions.length > 0 ? (
                          <ul>
                            {trip.extensions.map((extension) => {
                              //any extensions exist for this segment. i dont think this is used, but it is good to cover an edge case
                              return (
                                <li key={`extension-pee-${extension.stops[0]}-${extension.stops.slice(-1)}`}>
                                  {extension.trips} train
                                  {extension.trips.length > 1 ? "s" : ""}{" "}
                                  extended to {extension.stops.slice(-1)} from{" "}
                                  {extension.stops[0]}.
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <>
                <p>
                  {/* only one segment */}
                  Before the pandemic, this route ran from{" "}
                  {data.trips.pee[0].stops[0]} to{" "}
                  {data.trips.pee[0].stops.slice(-1)} and back{" "}
                  {data.trips.pee[0].trips} time
                  {data.trips.pee[0].trips > 1 ? "s" : ""} per day.{" "}
                  {data.trips.pee[0].extensions.length > 0 ? (
                    <>
                      {data.trips.pee[0].extensions.length > 1 ? (
                        <>
                          Addtionally, the following extensions were in effect
                          for the route:
                        </>
                      ) : (
                        <>
                          Additionally, the route had an extension from{" "}
                          {data.trips.pee[0].extensions[0].stops[0]} to{" "}
                          {data.trips.pee[0].extensions[0].stops.slice(-1)}{" "}
                          which ran {data.trips.pee[0].extensions[0].trips}{" "}
                          times per day.
                        </>
                      )}
                    </>
                  ) : null}
                </p>
                {data.trips.pee[0].extensions.length > 1 ? (
                  <>
                    {/* more than 1 extension */}
                    <ul>
                      {data.trips.pee[0].extensions.map((extension) => {
                        return (
                          <li key={`extension-pee-${extension.stops[0]}-${extension.stops.slice(-1)}`}>
                            {extension.trips} train
                            {extension.trips > 1 ? "s" : ""} extended to{" "}
                            {extension.stops.slice(-1)} from{" "}
                            {extension.stops[0]}.
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}
              </>
            )}
          </>
        ) : (
          /* route skill issue */
          <p>This route did not exist before the pandemic.</p>
        )}

        <h3>Proposed Connects US Schedule:</h3>
        {data.trips.post.length > 0 ? (
          <>
            {data.trips.post.length > 1 ? (
              <>
                <p>
                  Amtrak is proposing the following segments for this route:
                </p>
                <ul>
                  {data.trips.post.map((trip) => {
                    //more than one distinct segment (see san joaquins)
                    return (
                      <li key={`trip-post-${trip.stops[0]}-${trip.stops.slice(-1)}`}>
                        From {trip.stops[0]} to {trip.stops.slice(-1)} and back{" "}
                        {trip.trips} time{trip.trips > 1 ? "s" : ""} per day.
                        {trip.extensions.length > 0 ? (
                          <ul>
                            {trip.extensions.map((extension) => {
                              //any extensions exist for this segment. i dont think this is used, but it is good to cover an edge case
                              return (
                                <li key={`extension-post-${extension.stops[0]}-${extension.stops.slice(-1)}`}>
                                  {extension.trips} train
                                  {extension.trips.length > 1 ? "s" : ""} will
                                  extend to {extension.stops.slice(-1)} from{" "}
                                  {extension.stops[0]}.
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <>
                <p>
                  {/* only one segment */}
                  Amtrak is proposing this route run from{" "}
                  {data.trips.post[0].stops[0]} to{" "}
                  {data.trips.post[0].stops.slice(-1)} and back{" "}
                  {data.trips.post[0].trips} time
                  {data.trips.post[0].trips > 1 ? "s" : ""} per day.{" "}
                  {data.trips.post[0].extensions.length > 0 ? (
                    <>
                      {data.trips.post[0].extensions.length > 1 ? (
                        <>
                          Addtionally, the following extensions are proposed for
                          the route:
                        </>
                      ) : (
                        <>
                          Additionally, Amtrak is proposing an extension from{" "}
                          {data.trips.post[0].extensions[0].stops[0]} to{" "}
                          {data.trips.post[0].extensions[0].stops.slice(-1)} to
                          run {data.trips.post[0].extensions[0].trips} times per
                          day.
                        </>
                      )}
                    </>
                  ) : null}
                </p>
                {data.trips.post[0].extensions.length > 1 ? (
                  <>
                    {/* more than 1 extension */}
                    <ul>
                      {data.trips.post[0].extensions.map((extension) => {
                        return (
                          <li key={`extension-post-${extension.stops[0]}-${extension.stops.slice(-1)}`}>
                            {extension.trips} train
                            {extension.trips > 1 ? "s" : ""} to extend from{" "}
                            {extension.stops[0]} to {extension.stops.slice(-1)}.
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}
              </>
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

        <h3>Raw Data:</h3>
        <div>
          <details>
            <summary>Expand to see Raw Data:</summary>
            <JSONToHTMLTable data={data} />
          </details>
        </div>
      </main>
    </>
  );
};

export default Route;
