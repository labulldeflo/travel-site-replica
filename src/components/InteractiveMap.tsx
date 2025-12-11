import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

// Icône personnalisée pour les marqueurs
const redIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const InteractiveMap = () => {
  const locations = [
    { name: "Paris", coordinates: [48.8566, 2.3522] as [number, number], country: "France" },
    { name: "Marrakech", coordinates: [31.6295, -7.9811] as [number, number], country: "Maroc" },
    { name: "Le Cap", coordinates: [-33.9249, 18.4241] as [number, number], country: "Afrique du Sud" },
    { name: "Bangkok", coordinates: [13.7563, 100.5018] as [number, number], country: "Thaïlande" },
    { name: "Hanoï", coordinates: [21.0285, 105.8342] as [number, number], country: "Vietnam" },
    { name: "Tokyo", coordinates: [35.6762, 139.6503] as [number, number], country: "Japon" },
    { name: "Sydney", coordinates: [-33.8688, 151.2093] as [number, number], country: "Australie" },
    { name: "Auckland", coordinates: [-36.8485, 174.7633] as [number, number], country: "Nouvelle-Zélande" },
    { name: "Buenos Aires", coordinates: [-34.6037, -58.3816] as [number, number], country: "Argentine" },
    { name: "Rio de Janeiro", coordinates: [-22.9068, -43.1729] as [number, number], country: "Brésil" },
    { name: "Lima", coordinates: [-12.0464, -77.0428] as [number, number], country: "Pérou" },
    { name: "Mexico", coordinates: [19.4326, -99.1332] as [number, number], country: "Mexique" },
    { name: "New York", coordinates: [40.7128, -74.006] as [number, number], country: "USA" },
    { name: "Islande", coordinates: [64.9631, -18.0686] as [number, number], country: "Islande" },
  ];

  const route = locations.map((loc) => loc.coordinates) as [number, number][];

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      <MapContainer center={[20, 0]} zoom={2} style={{ width: "100%", height: "100%" }} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc, idx) => (
          <Marker key={idx} position={loc.coordinates} icon={redIcon}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.country}
            </Popup>
          </Marker>
        ))}

        <Polyline positions={route} color="blue" dashArray="5, 10" />
      </MapContainer>

      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
        <h3 className="font-bold text-sm mb-2">Itinéraire Tour du Monde</h3>
        <p className="text-xs text-muted-foreground">{locations.length} destinations à travers 5 continents</p>
      </div>
    </div>
  );
};

export default InteractiveMap;
