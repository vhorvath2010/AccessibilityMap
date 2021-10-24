import { Rating } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import L from 'leaflet';

import { MapContainer, TileLayer, Marker, Tooltip, LayersControl, LayerGroup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';

import './map.css';


const redTriangleIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Armed_forces_red_triangle.svg/864px-Armed_forces_red_triangle.svg.png',
    iconSize: [32, 32],
    iconAnchor: [8, 8],
});

const blackDiamondIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ski_trail_rating_symbol-black_diamond.svg/768px-Ski_trail_rating_symbol-black_diamond.svg.png',
    iconSize: [32, 32],
    iconAnchor: [8, 8],
});

const blueSquareIcon = L.icon({
    iconUrl: 'https://media.discordapp.net/attachments/901274484340818010/901648550017007676/same-coloured-paper-l-deep-sky-blue-13.png',
    iconSize: [32, 32],
    iconAnchor: [8, 8],
});

const pinkStarIcon = L.icon({
    iconUrl: 'https://media.discordapp.net/attachments/901274484340818010/901648973784301608/57-576538_pink-star-clip-art-at-clker-pink-star.png',
    iconSize: [32, 32],
    iconAnchor: [8, 8],
});


function Map(props: { vendors: Object, center:Object, updateCenterCallback: CallableFunction, vendorClickCallback: CallableFunction}) {

    const [map, setMap] = useState();
    const [center, setCenter] = useState()

    useEffect(() => {
        if (center != props.center) {
            console.log("different centers")
            map.setView(props.center, map.zoom, {
                "animate": true,
                "pan": {
                  "duration": 1
                }
            });
        }
    }, [props.center])

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
        <MapContainer center={[33.7490, -84.3880]} style={{ width: '100%', height: '100%' }} zoom={13} scrollWheelZoom={false} whenCreated={map => setMap(map)}>
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
                        {props.vendors != null ? props.vendors.restaurant.map((vendor) => (<Marker id={vendor.id} icon={redTriangleIcon} position={[vendor.latlng.lat, vendor.latlng.lng]} eventHandlers={{mouseup: handleVendorClick}}><Tooltip>{vendor.name}<br></br>{vendor.addr}<br></br><Rating name="read-only" value={getAccessibilityScore(vendor)} readOnly /><div class="ratingDesc">{getAccessibilityDesc(getAccessibilityScore(vendor))}</div></Tooltip></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Park">
                    <LayerGroup>
                        {props.vendors != null ? props.vendors.park.map((vendor) => (<Marker id={vendor.id} icon={blueSquareIcon} position={[vendor.latlng.lat, vendor.latlng.lng]} eventHandlers={{mouseup: handleVendorClick}}><Tooltip>{vendor.name}<br></br>{vendor.addr}<br></br><Rating name="read-only" value={getAccessibilityScore(vendor)} readOnly /><div class="ratingDesc">{getAccessibilityDesc(getAccessibilityScore(vendor))}</div></Tooltip></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Transportation">
                    <LayerGroup>
                        {props.vendors != null ? props.vendors.transportation.map((vendor) => (<Marker id={vendor.id} icon={blackDiamondIcon} position={[vendor.latlng.lat, vendor.latlng.lng]} eventHandlers={{mouseup: handleVendorClick}}><Tooltip>{vendor.name}<br></br>{vendor.addr}<br></br><Rating name="read-only" value={getAccessibilityScore(vendor)} readOnly /><div class="ratingDesc">{getAccessibilityDesc(getAccessibilityScore(vendor))}</div></Tooltip></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Hairdresser">
                    <LayerGroup>
                        {props.vendors != null ? props.vendors.hairdresser.map((vendor) => (<Marker id={vendor.id} icon={pinkStarIcon} position={[vendor.latlng.lat, vendor.latlng.lng]} eventHandlers={{mouseup: handleVendorClick}}><Tooltip>{vendor.name}<br></br>{vendor.addr}<br></br><Rating name="read-only" value={getAccessibilityScore(vendor)} readOnly /><div class="ratingDesc">{getAccessibilityDesc(getAccessibilityScore(vendor))}</div></Tooltip></Marker>)) : null}
                    </LayerGroup>
                </LayersControl.Overlay>

            </LayersControl>
            <MapClickHandler />
        </MapContainer>
    );
}

export default Map;