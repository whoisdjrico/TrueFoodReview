function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.97914, lng: -118.41480705731},
    zoom: 13
  });
  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: "col4",
        from: "1997wo1poMe6iv7VXz1P5Dj1fkO-vud48QgNZwu1J"
    }
  });
  layer.setMap(map);
}
