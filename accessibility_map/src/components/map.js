import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';

import './map.css';

function Map(props:{vendors:Object, updateCenterCallback:CallableFunction}) {

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
        <MapContainer center={[45.444, -75.6939]} style={{width: '100%',height: '100%'}}zoom={13} scrollWheelZoom={false} whenCreated={map => setMap(map)}>
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
                <LayersControl.Overlay checked name="Restaurants">
                    <LayerGroup>
                        {props.vendors != null ? props.vendors.restaurant.map((vendor) => (<Marker position={[vendor.latlng._lat, vendor.latlng._long]}></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Park">
                    <LayerGroup>
                        {props.vendors != null ? props.vendors.park.map((vendor) => (<Marker position={[vendor.latlng._lat, vendor.latlng._long]}></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>
                
            </LayersControl>
            <MapClickHandler />
        </MapContainer>
    );
}

export default Map;