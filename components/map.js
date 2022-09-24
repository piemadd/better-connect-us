import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

let southWest = L.latLng(19.41558, -128.807311);
let northEast = L.latLng(62.387941, -56.355762);
let bounds = L.latLngBounds(southWest, northEast);

export default function Map() {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={[39.14710270770074, -96.1962890625]}
      zoom={5}
      minZoom={0}
      maxZoom={14}
      wheelPxPerZoomLevel={120}
      maxBounds={bounds}
      tileSize={512}
      style={{ height: "100vh", width: "100vw", zIndex: 0, overflow: "hidden" }}
      zoomControl={false}
      scrollWheelZoom={true}
    >
      <TileLayer
        url={`https://map.amtrakle.com/{z}/{x}/{y}`}
        attribution='<a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a> Contributors | &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
    </MapContainer>
  );
}
