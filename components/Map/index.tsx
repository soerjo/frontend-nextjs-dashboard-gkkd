import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export const Map = () => {
  const center = {
    lat: -6.220206652360106,
    lng: 106.75049866452673,
  };
  const zoom = 15;
  const greatPlaceCoords = {
    lat: -6.220206652360106,
    lng: 106.75049866452673,
  };

  return (
    <div className="w-full h-[32rem]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDS43AWNAwfZh4FLpGlyuttuxPvYL0rhJg" }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      ></GoogleMapReact>
    </div>
  );
};
