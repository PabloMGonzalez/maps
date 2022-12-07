import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Tooltip } from 'react-tooltip'


const containerStyle = {
  width: '1350px',
  height: '550px'
};

const center = {
  lat: -34.55884338552234,
  lng: -58.41211645073693
};

const position = {
  lat: -34.55884338552234,
  lng: -58.41211645073693
}

const position1 = {
  lat: -34.55884338552234,
  lng: -58.41277645073693
}
const position2 = {
  lat: -34.55884338552234,
  lng: -58.41347645073693
}

function MyComponent() {

  const [zoom, setZoom] = useState(13);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB1xuvxR1Vl9ygQJDZOHWnqBJhXNfkSkUA"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const test = () => {
    console.log('hola mundo')
  }


  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
  }


  useEffect(() => {
    setTimeout(() => {
      setZoom(17)
    }, 300);
  }, []);

  return isLoaded ? (

    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={zoom}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapTypeId='satellite'
    >
      <Marker
        onClick={test}
        icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
        title="A-02; Despachando; Operador: Guido Jerez; Litros disponibles: 19200"
        position={position}
      />
      <Marker
        onClick={test}
        icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        title="A-03; Despacho Finalizado; Operador: Menendez Juan; Litros disponibles: 6200"
        position={position1}
      />
      {/* <Marker
      icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
      position={position2}
    /> */}
      <Marker
        icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
        title="A-04; Despacho Finalizado; Operador: Medina Fabian; Litros disponibles: 1200"
        position={position2}
      />


      {/* 
      <InfoWindow
        // onLoad={onLoad}
        position={position}        
      >
        <div style={divStyle}>
          <h1>InfoWindow</h1>
        </div>
      </InfoWindow> */}

      { /* Child components, such as markers, info windows, etc. */}
      <>
      </>
    </GoogleMap>

  ) : <></>
}

export default React.memo(MyComponent)












