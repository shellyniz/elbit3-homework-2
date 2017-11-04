"use strict";
///<reference path='node_modules\@types\leaflet\index.d.ts'/>
var mymap = L.map('mapid').setView([32.794044, 34.989571], 13);
//let coord   = document.getElementById('coord');
var map = document.getElementById('mapid');
var OopenStreetmMap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2hlbGx5bml6IiwiYSI6ImNqOWlnM3BhbTEwNTkzM3BnZnY4djV3NWcifQ.ZLJSrxp_Pc-4V45vdtn85g'
});
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
var currentLayer = Esri_WorldImagery;
var nextLayer = OopenStreetmMap;
OopenStreetmMap.addTo(mymap);
var coord = L.control.attribution().setPosition('bottomleft').addTo(mymap).getContainer();
coord.innerText = "";
coord.style.fontSize = "15px";
function onMapHover(e) {
    if (coord) {
        coord.innerHTML = 'Lat: ' + parseFloat(e.latlng.lat.toFixed(4)) + ' Long: ' + parseFloat(e.latlng.lng.toFixed(4));
    }
}
function onMapClick(e) {
    if (e.originalEvent.shiftKey) {
        var temp = currentLayer;
        var currMouseLocation = coord.innerText;
        mymap.removeLayer(currentLayer);
        nextLayer.addTo(mymap);
        currentLayer = nextLayer;
        nextLayer = temp;
        coord.innerText = currMouseLocation;
    }
}
mymap.on('mousemove', onMapHover);
mymap.on('click', onMapClick);
if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position) {
    var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
    marker.bindPopup("You are here.").openPopup();
    L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);
}
