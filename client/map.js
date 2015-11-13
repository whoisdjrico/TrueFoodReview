var map;
var openWindow;

//Yellow, Red, Pink, Purple, Green
//0-2, 2-3, 3-3.5, 3.5-4, 4-5
//FFFF42, F9032A, D0368D, 8434B0, B4EF3E

function colorPicker(num) {
console.log(num);
if (num <= 2) {
  console.log('FFFF42');
  return '#FFFF42';
} else if (num > 2 && num <= 3) {
  console.log('F9032A');
  return '#F9032A';
} else if (num > 3 && num <= 3.5) {
  console.log('D0368D');
  return '#D0368D';
} else if (num > 3.5 && num <= 4) {
  console.log('8434B0');
  return '#8434B0';
} else if (num > 4 && num <= 5) {
  console.log('B4EF3E');
  return '#B4EF3E';
}
}

function addCircles() {
var query = {
  url: 'https://www.googleapis.com/fusiontables/v2/query?sql=',
  sql: 'SELECT+*+FROM+',
  table: '1997wo1poMe6iv7VXz1P5Dj1fkO-vud48QgNZwu1J',
  key: 'AIzaSyCWd4CkCZ2WLm1Hupxf7h0D2z3r_m7EX7U'
};

$.ajax({
  type: 'GET',
  url: query.url + query.sql + query.table + '&key=' + query.key,
  success: function(data) {
    data.rows.sort(function(a,b){
      return b[2] - a[2];
    }).forEach(createSpot);
  },
  dataType: 'json'
});
}

function createSpot (array) {
var spotCircle = new google.maps.Circle({
  strokeColor: colorPicker(array[1]),
  strokeOpacity: 0.8,
  strokeWeight: 0,
  fillColor: colorPicker(array[1]),
  fillOpacity: 0.4,
  map: map,
  center: {lat: array[3], lng: array[4]},
  radius: Math.sqrt(array[2]) * 15
});

spotCircle.prototype = new google.maps.MVCObject();

var infowindow = new google.maps.InfoWindow({
  content: '<b>Name: </b>' + array[0] + '<br>' +
  '<b>Rating: </b>' + array[1] + '<br>' +
  '<b>Review Count: </b>' + array[2] + '<br>' +
  '<b>Lat: </b>' + array[3] + '<br>' +
  '<b>Long: </b>' + array[4] + '<br>' +
  '<b>Address: </b>' + array[5] + '<br>' +
  '<b>City: </b>' + array[6] + '<br>' +
  '<b>State: </b>' + array[7] + '<br>' +
  '<b>Zip Code: </b>' + array[8] + '<br>',
  position: {lat: array[3], lng: array[4]}
});

spotCircle.addListener('click',function(event) {
  if (openWindow) {
    openWindow.close();
  }
  infowindow.open(map,spotCircle);
  openWindow = infowindow;
});

}

function initMap() {
if(!document.getElementById('map')) {
  console.log('Map not present');
  setTimeout(initMap,1000);
} else {

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.97914, lng: -118.41480705731},
      zoom: 13
    });

    addCircles();

    var layer = new google.maps.FusionTablesLayer({
      query: {
        select: "col4",
          from: "1997wo1poMe6iv7VXz1P5Dj1fkO-vud48QgNZwu1J"
      }
    });

    layer.setMap(map);
  }
}
