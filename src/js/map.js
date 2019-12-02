var mymap = L.map("mapid").setView([38.83, -76.85], 15);
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibXR1bmc4OCIsImEiOiJjazM5YmxmNXUwMDZ1M2pxcmtoeHh5OWx0In0.v3Sd-9s0tjXiAoRQ3tyzxQ",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: "mapbox.streets"
    //accessToken: "pk.eyJ1IjoibXR1bmc4OCIsImEiOiJjazM5YmxmNXUwMDZ1M2pxcmtoeHh5OWx0In0.v3Sd-9s0tjXiAoRQ3tyzxQ"
  }
).addTo(mymap);

L.circle([38.83, -76.85], 600, {
  color: "red"
  // fillColor: '#f03',
  // fillOpacity: 0.5
}).addTo(mymap);

// create a red polygon from an array of LatLng points
var latlngs = [
  [38.6, -77.],
  // [41, -109.03],
  // [41, -102.05],
  // [37, -102.04]
];

var polygon = L.polygon(latlngs, { color: "yellow" }).addTo(map);
// zoom the map to the polygon
map.fitBounds(polygon.getBounds());
