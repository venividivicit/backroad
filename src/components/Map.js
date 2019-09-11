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
      bootstrapURLKeys={{ key: 'AIzaSyDYzuuw0oELM4zkgd89o-fz7ihCTOD38Mg' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={39.389660}
        lng={-76.729856}
        text={'Kreyser Avrora'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
