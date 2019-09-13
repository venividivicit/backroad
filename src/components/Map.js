import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 39.389660,
    lng: -76.729856,
  },
  zoom: 4,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '400px', width: '400px' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBP2GNmwAsipYFPpLLeWjoW9_Y3aXcivu4' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={39.389660}
        lng={-76.729856}
        text={'Home Remodeling'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
