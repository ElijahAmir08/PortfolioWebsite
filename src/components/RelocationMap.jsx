import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Popup,
  CircleMarker,
  useMap,
} from "react-leaflet";
import { relocationData } from "../data/relocationData";

function FitMapToAllPoints({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(coordinates, { padding: [40, 40] });
  }, [map, coordinates]);

  return null;
}

function getPointColor(pointType) {
  switch (pointType) {
    case "origin":
      return "#f59e0b"; // amber
    case "education":
      return "#a855f7"; // purple
    case "destination":
      return "#22c55e"; // green
    case "current":
      return "#06b6d4"; // cyan
    default:
      return "#38bdf8";
  }
}

export default function RelocationMap() {
  const currentCoordinates = [
    relocationData.current.lat,
    relocationData.current.lng,
  ];

  const nextCoordinates = [
    relocationData.next.lat,
    relocationData.next.lng,
  ];

  const routeCoordinates = [currentCoordinates, nextCoordinates];

  const pointOfInterestCoordinates = relocationData.pointsOfInterest.map(
    (point) => [point.lat, point.lng]
  );

  const allCoordinates = [
    currentCoordinates,
    nextCoordinates,
    ...pointOfInterestCoordinates,
  ];

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
      <MapContainer
        center={currentCoordinates}
        zoom={5}
        scrollWheelZoom={false}
        className="h-[360px] w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitMapToAllPoints coordinates={allCoordinates} />

        <Polyline
          positions={routeCoordinates}
          pathOptions={{ color: "#22d3ee", weight: 3 }}
        />

        <CircleMarker
          center={currentCoordinates}
          radius={8}
          pathOptions={{
            color: getPointColor("current"),
            fillColor: getPointColor("current"),
            fillOpacity: 0.9,
          }}
        >
          <Popup>
            <strong>{relocationData.current.city}</strong>
            <br />
            {relocationData.current.label}
          </Popup>
        </CircleMarker>

        <CircleMarker
          center={nextCoordinates}
          radius={8}
          pathOptions={{
            color: getPointColor("destination"),
            fillColor: getPointColor("destination"),
            fillOpacity: 0.9,
          }}
        >
          <Popup>
            <strong>{relocationData.next.city}</strong>
            <br />
            {relocationData.next.label}
          </Popup>
        </CircleMarker>

        {relocationData.pointsOfInterest.map((point) => (
          <CircleMarker
            key={point.id}
            center={[point.lat, point.lng]}
            radius={7}
            pathOptions={{
              color: getPointColor(point.type),
              fillColor: getPointColor(point.type),
              fillOpacity: 0.9,
            }}
          >
            <Popup>
              <strong>{point.name}</strong>
              <br />
              {point.description}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}