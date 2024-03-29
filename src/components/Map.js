import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "../data/crimes.json";
import Indicator from "../assets/location.png";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 30.0813633,
    longitude: -94.2679954,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src={Indicator} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.ADDRESS}</p>
              <p>{selectedPark.properties.DESCRIPTION}</p>
              <a
                className="Link2"
                href={selectedPark.properties.WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedPark.properties.WEBSITE}
              </a>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
