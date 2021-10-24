import { Rating } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { MapContainer, TileLayer, Marker, Tooltip, LayersControl, LayerGroup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';

import './map.css';

function Map(props: { vendors: Object, updateCenterCallback: CallableFunction, vendorClickCallback: CallableFunction}) {

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

    function getAccessibilityDesc(score) {
        if (score <= 1) {
            return "Poor";
        } else if (score <= 3) {
            return "Okay";
        } else if (score <= 5) {
            return "Good";
        }
    }

    function getAccessibilityScore(vendor) {
        var score = 0;
        score += vendor['animal'] ? 1 : 0;
        score += vendor['asl'] ? 1 : 0;
        score += vendor['braille'] ? 1 : 0;
        score += vendor['curb'] ? 1 : 0;
        score += vendor['mob'] ? 1 : 0;
        score += vendor['park'] ? 1 : 0;
        return Math.min(5, score);
    }

    function handleVendorClick(e) {
        props.vendorClickCallback(e.target.options.id);
    }

    return (
        <MapContainer center={[45.444, -75.6939]} style={{ width: '100%', height: '100%' }} zoom={13} scrollWheelZoom={false} whenCreated={map => setMap(map)}>
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
                        {props.vendors != null ? props.vendors.restaurant.map((vendor) => (<Marker id={vendor.id} position={[vendor.latlng.lat, vendor.latlng.lng]} eventHandlers={{mouseup: handleVendorClick}}><Tooltip>{vendor.id}{vendor.name}<br></br>{vendor.addr}<br></br><Rating name="read-only" value={getAccessibilityScore(vendor)} readOnly /><div class="ratingDesc">{getAccessibilityDesc(getAccessibilityScore(vendor))}</div></Tooltip></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Park">
                    <LayerGroup>
                        {props.vendors != null ? props.vendors.park.map((vendor) => (<Marker id={vendor.id} position={[vendor.latlng.lat, vendor.latlng.lng]} eventHandlers={{mouseup: handleVendorClick}}><Tooltip>{vendor.id}{vendor.name}<br></br>{vendor.addr}<br></br><Rating name="read-only" value={getAccessibilityScore(vendor)} readOnly /><div class="ratingDesc">{getAccessibilityDesc(getAccessibilityScore(vendor))}</div></Tooltip></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Transportation">
                    <LayerGroup>
                        {props.vendors != null ? props.vendors.transportation.map((vendor) => (<Marker id={vendor.id} position={[vendor.latlng.lat, vendor.latlng.lng]} eventHandlers={{mouseup: handleVendorClick}}><Tooltip>{vendor.id}{vendor.name}<br></br>{vendor.addr}<br></br><Rating name="read-only" value={getAccessibilityScore(vendor)} readOnly /><div class="ratingDesc">{getAccessibilityDesc(getAccessibilityScore(vendor))}</div></Tooltip></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Hairdresser">
                    <LayerGroup>
                        {props.vendors != null ? props.vendors.hairdresser.map((vendor) => (<Marker id={vendor.id} position={[vendor.latlng.lat, vendor.latlng.lng]} eventHandlers={{mouseup: handleVendorClick}}><Tooltip>{vendor.id}{vendor.name}<br></br>{vendor.addr}<br></br><Rating name="read-only" value={getAccessibilityScore(vendor)} readOnly /><div class="ratingDesc">{getAccessibilityDesc(getAccessibilityScore(vendor))}</div></Tooltip></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>

            </LayersControl>
            <MapClickHandler />
        </MapContainer>
    );
}

export default Map;