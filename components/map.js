import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Popup,
  Marker,
  Polyline,
} from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

let southWest = L.latLng(19.41558, -132.807311);
let northEast = L.latLng(62.387941, -56.355762);
let bounds = L.latLngBounds(southWest, northEast);

function Bounds({ viewBounds }) {
  const map = useMap();
  map.fitBounds(viewBounds);
  return null;
}

export default function Map(data) {
  const features = data.features ? data.features : [];

  let overallBounds = [];

  if (features.length > 0) {
    features.forEach((feature) => {
      feature.geometry.coordinates.forEach((line) => {
        line.forEach((point) => {
          overallBounds.push([point[1], point[0]]);
        });
      });
    });
  } else {
    overallBounds = [[19.41558, -132.807311], [62.387941, -56.355762]];
  }

  const viewBounds = new L.LatLngBounds(overallBounds);

  return (
    <MapContainer
      center={[40.0849352, -99.2924727]}
      zoom={4}
      minZoom={4}
      maxZoom={10}
      wheelPxPerZoomLevel={120}
      maxBounds={bounds}
      tileSize={512}
      style={{ height: "50vh", width: "100%", zIndex: 0, overflow: "hidden" }}
      zoomControl={true}
      scrollWheelZoom={true}
    >
      <TileLayer
        url={`https://tile.amtrakle.com/{z}/{x}/{y}.png`}
        attribution='<a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a> Contributors | &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {features.length > 0
        ? features
            .map((feature) => {
              return feature.geometry.coordinates.map((line) => {
                return line.map((point) => {
                  return [point[1], point[0]];
                });
              });
            })
            .map((line, i) => {
              return (
                <Polyline
                  key={`other-line-${i}`}
                  pathOptions={{ color: "#517dff" }}
                  positions={line}
                />
              );
            })
        : null}
      <Bounds viewBounds={viewBounds} />
    </MapContainer>
  );
}
