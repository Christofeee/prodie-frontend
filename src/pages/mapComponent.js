import React from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMapEvents,
  } from 'react-leaflet'
// import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
// import "../App.css";

// export const icon = new Icon({
//   iconUrl: "/skateboarding.svg",
//   iconSize: [25, 25]
// });

export default function MapComponent() {
//   const [activePark, setActivePark] = React.useState(null);

  return (
    <>
    
    
        <MapContainer style={{width:"100%",height:"100%"}}  center={[16.838375, 96.127785]} zoom={12}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* {parkData.features.map(park => (
            <Marker
            key={park.properties.PARK_ID}
            position={[
                park.geometry.coordinates[1],
                park.geometry.coordinates[0]
            ]}
            onClick={() => {
                setActivePark(park);
            }}
            icon={icon}
            />
        ))} */}

        {/* {activePark && (
            <Popup
            position={[
                activePark.geometry.coordinates[1],
                activePark.geometry.coordinates[0]
            ]}
            onClose={() => {
                setActivePark(null);
            }}
            >
            <div>
                <h2>{activePark.properties.NAME}</h2>
                <p>{activePark.properties.DESCRIPTIO}</p>
            </div>
            </Popup>
        )} */}
        </MapContainer>
        
    </>
  );
}