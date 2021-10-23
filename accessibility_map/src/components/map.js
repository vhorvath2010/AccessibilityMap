import React from 'react';
import ReactDOM from 'react-dom';

import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';

import './map.css';

class Map extends React.Component {


    



    render(){
        return (
            <MapContainer center={[51.505, -0.09]} style={{width: '100%',height: '100%'}}zoom={13} scrollWheelZoom={false}>
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
                    <LayersControl.Overlay name="Marker with popup">
                        <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Restaurants">
                        {/* Z{this.props.restaurants.map((vendor) => (<Marker position={[vendor.lat, vendor.lng]}></Marker>))} */}
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Transporation">
                        {/* Z{this.props.restaurants.map((vendor) => (<Marker position={[vendor.lat, vendor.lng]}></Marker>))} */}
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Services">
                        {/* Z{this.props.restaurants.map((vendor) => (<Marker position={[vendor.lat, vendor.lng]}></Marker>))} */}
                    </LayersControl.Overlay>
                    
                </LayersControl>
            </MapContainer>
        );
  }
}

export default Map;