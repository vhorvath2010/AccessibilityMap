import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';

import './map.css';

function Map(props:{updateCenterCallback:CallableFunction}) {

    const [map, setMap] = useState();
    const [center, setCenter] = useState()
    
    function MapClickHandler() {
        const map = useMapEvents({
            mouseup: (e) => {
                props.updateCenterCallback(map.getCenter())
            }
        });
        return null;
    }

    return (
        <MapContainer center={[51.505, -0.09]} style={{width: '100%',height: '100%'}}zoom={13} scrollWheelZoom={false} whenCreated={map => setMap(map)}>
            <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay name="Restaurants">
                <Marker position={[51.505, -0.09]}></Marker>
                    {/* Z{this.props.restaurants.map((vendor) => (<Marker position={[vendor.lat, vendor.lng]}></Marker>))} */}
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Transporation">
                <Marker position={[51.505, -0.09]}></Marker>
                    {/* Z{this.props.restaurants.map((vendor) => (<Marker position={[vendor.lat, vendor.lng]}></Marker>))} */}
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Services">
                <Marker position={[51.505, -0.09]}></Marker>
                    {/* Z{this.props.restaurants.map((vendor) => (<Marker position={[vendor.lat, vendor.lng]}></Marker>))} */}
                </LayersControl.Overlay>
                
            </LayersControl>
            <MapClickHandler />
        </MapContainer>
    );
}

export default Map;