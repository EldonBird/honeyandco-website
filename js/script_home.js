var map = L.map('map').setView([32.8189166667, -98.1016666667], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([32.8189166667, -98.1016666667]).addTo(map);
