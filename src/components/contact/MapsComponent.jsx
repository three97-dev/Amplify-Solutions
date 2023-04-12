import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const demoLocation = {
  lat: 49.82523,
  lng: -97.169,
};

const MapsComponent = ({ location, googleMapsCredentials }) => {
  const { isLoaded, loadError } = useLoadScript(googleMapsCredentials || { id: "", googleMapsApiKey: "" });

  const mapLocation = location ? { lat: location.lat, lng: location.lon } : demoLocation;

  const renderMap = () => {
    return (
      <GoogleMap
        options={{
          zoomControlOptions: {
            position: "right-center",
          },
        }}
        mapContainerStyle={containerStyle}
        center={mapLocation}
        zoom={10}
      >
        <Marker position={mapLocation} clickable={false} />
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <>Loading Google Maps...</>;
};

export default MapsComponent;
