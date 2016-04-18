$(document).ready(function() {

    var lat = 40.2838;
    var lon = -3.8215;

    var map = L.map('map').setView([lat, lon], 16);

    var circle = L.circle([lat, lon], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lon]).addTo(map)
        .bindPopup('Usted está aquí')
        .openPopup();

    var map = L.map('map2');
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    map.locate({setView: true, maxZoom: 18, enableHighAccuracy: true});
    function onLocationFound(e) {
      L.marker(e.latlng).addTo(map).bindPopup("Coordenadas: " + e.latlng.toString()).openPopup();
    }
    map.on('locationfound', onLocationFound);

    var popup = L.popup();
    function onMapClick(e) {
       var coor = e.latlng;
       console.log(coor);
       popup.setLatLng(e.latlng).setContent("Ubicación: " + e.latlng.toString()).openOn(map);
       var circle = L.circle(coor, 500, {
           color: 'red',
           fillColor: '#f03',
           fillOpacity: 0.5
       }).addTo(map);
    }
    map.on('click', onMapClick);

});
