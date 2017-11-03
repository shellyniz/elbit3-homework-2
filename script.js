"use strict";
///<reference path='node_modules\@types\leaflet\index.d.ts'/>
var mymap = L.map('mapid').setView([32.794044, 34.989571], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2hlbGx5bml6IiwiYSI6ImNqOWlnM3BhbTEwNTkzM3BnZnY4djV3NWcifQ.ZLJSrxp_Pc-4V45vdtn85g'
}).addTo(mymap);
var marker = L.marker([51.5, -0.09]).addTo(mymap);
