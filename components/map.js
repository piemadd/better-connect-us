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

export default function Map(data) {
  const features = data.features ? data.features : [];
  //console.log(features);
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
        url={`https://map.amtrakle.com/{z}/{x}/{y}`}
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
                  pathOptions={{ color: "red" }}
                  positions={line}
                />
              );
            })
        : null}
    </MapContainer>
  );
}
