import React from 'react';
import {GoogleMap, Marker, withGoogleMap} from 'react-google-maps';

const MapComponent = () => {

    const GoogleMapExample = withGoogleMap(() => (
        <GoogleMap
            defaultCenter={{lat: 49.4704844, lng: 15.0025948}}
            defaultZoom={16}
        >
            <Marker position={{lat: 49.4704844, lng: 15.0025948}}/>
        </GoogleMap>
    ));

    return (
        <div>
            <GoogleMapExample
                containerElement={<div style={{height: '400px'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
        </div>
    );
};

export default MapComponent;

