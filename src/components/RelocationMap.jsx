import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from "react-leaflet";
import { relocationData } from "../data/relocationData";

function FitMapToRoute() {
    const map = useMap();
    const routePoints = [
        [relocationData.current.lat, relocationData.current.lng],
        [relocationData.next.lat, relocationData.next.lng],
    ];
    map.fitBounds(routePoints, { padding: [40, 40] });
    return null;
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

    return (
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
      <MapContainer
        center={currentCoordinates}
        zoom={5}
        scrollWheelZoom={false}
        className="h-[320px] w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitMapToRoute />

        <Marker position={currentCoordinates}>
          <Popup>
            <strong>{relocationData.current.city}</strong>
            <br />
            {relocationData.current.label}
          </Popup>
        </Marker>

        <Marker position={nextCoordinates}>
          <Popup>
            <strong>{relocationData.next.city}</strong>
            <br />
            {relocationData.next.label}
          </Popup>
        </Marker>

        <Polyline positions={routeCoordinates} />
      </MapContainer>
    </div>
  );
}