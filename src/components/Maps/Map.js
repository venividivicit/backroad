import React from "react"
import GoogleMapReact from "google-map-react"
import Marker from "./Marker"

const defaultProps = {
  center: {
    lat: 39.38966,
    lng: -76.729856,
  },
  zoom: 12,
}


const GoogleMap = () => (
  <div style={{ height: "400px", width: "400px" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCILCY-P4ZorWrJ8AS-cYzeINQElSRWfDg" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Marker lat={39.38966} lng={-76.729856} name="My Marker" color="blue" />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
