import React, { useState } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer, Polyline, CircleMarker } from 'react-leaflet';
// import L from "leaflet"
 
export default function Map(props) {
    const [position, setPosition] = useState([15, -0.9]);
    const [polyline, setPolyline] = useState([15, -0.9]);
    const [active, setActive] = useState(false)
    let zoom = 13.5;
    //setPosition to current location
    function getPosition(pos) {
        var crd = pos.coords;
        setPosition({ position: [ crd.latitude, crd.longitude ] })
    }
    //Log warning error
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    function getPolyline(e) {
        console.log("hello")
        let start = position.position;
        let end = [e.latlng.lat, e.latlng.lng]
        setPolyline([start,end])
        setActive(true);
        let route = getRoute(start, end);
    } 
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function getRoute(departureLatLng, arrivalLatLng) {
        console.log(departureLatLng, arrivalLatLng)
        const apiKey = "60cf6646c39e45a0de83a59baa00a57d";
        const appid = "dfc45614";
        const headers = new Headers({
            "Host": "api.traveltimeapp.com",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Application-Id": appid,
            "X-Api-Key": apiKey
        });
        const data = {
            "locations": [
                {
                    "id": "departure",
                    "coords": {
                        "lat": departureLatLng[0],
                        "lng": departureLatLng[1]
                    }
                },
                {
                    "id": "arrival",
                    "coords": {
                        "lat": arrivalLatLng[0],
                        "lng": arrivalLatLng[1]
                    }
                }
            ],
            "departure_searches": [{
                "id": "facewoof",
                "departure_location_id": "departure",
                "arrival_location_ids": [
                    "arrival"
                ],
                "transportation": { "type": "walking" },
                "departure_time": getDateString(),
                "properties": ["travel_time", "distance", "route"]
            }]
        };
        return fetch("https://api.traveltimeapp.com/v4/routes", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        }).then(res => res.json()).then(drawRoute).catch(console.error);
    }
    function getRoute(departureLatLng, arrivalLatLng) {
        const apiKey = "60cf6646c39e45a0de83a59baa00a57d";
        const appid = "dfc45614";
        const headers = new Headers({
            "Host": "api.traveltimeapp.com",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Application-Id": appid,
            "X-Api-Key": apiKey
        });
        const data = {
            "locations": [
                {
                    "id": "departure",
                    "coords": {
                        "lat": departureLatLng[0],
                        "lng": departureLatLng[1]
                    }
                },
                {
                    "id": "arrival",
                    "coords": {
                        "lat": arrivalLatLng[0],
                        "lng": arrivalLatLng[1]
                    }
                }
            ],
            "departure_searches": [{
                "id": "facewoof",
                "departure_location_id": "departure",
                "arrival_location_ids": [
                    "arrival"
                ],
                "transportation": { "type": "walking" },
                "departure_time": getDateString(),
                "properties": ["travel_time", "distance", "route"]
            }]
        };
        fetch("https://api.traveltimeapp.com/v4/routes", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        }).then(res => res.json()).then(drawRoute).catch(console.error);
    }
    function drawRoute(serverJson) {
        console.log(serverJson);
        let properties = serverJson.results[0].locations[0].properties[0],
            routeArray = properties.route.parts.map(route => route.coords).flat().map(routeObj => Object.values(routeObj)),
            marker = <Marker positions={routeArray[routeArray.length -1]}/>;
            setActive(true);
            console.log(routeArray)
            setPolyline(routeArray);
    }
    function getDateString() {
        let d = new Date();
        return d.toISOString();
    }
    navigator.geolocation.getCurrentPosition(getPosition, error, options);
    const { position:pos } = position;
    return (
        <LeafletMap center={pos} zoom={zoom} style={{ height: "500px" }} onClick={getPolyline}>
            {/* <TileLayer
                attribution="<a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
            <TileLayer
                //attribution="<a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url="https://api.mapbox.com/styles/v1/eds2040/ckc99ywz51xij1jqn3upl1wrx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWRzMjA0MCIsImEiOiJja2M5ODFna2IxaXE3MnlvYmdkaGpkMnNuIn0.xO_j766gQ9wuvmx2UaPzWw"
                attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
            />

             <CircleMarker center={pos} color="red" radius={20}>
                <Popup>Popup in CircleMarker</Popup>
                
            </CircleMarker>
            <Marker position={pos}>
                <Popup autoClose="false"> You are here. </Popup>
                
            </Marker>

           


            {active ? <Polyline color="blue" positions={polyline}/> : null}
        </LeafletMap>
    )
}