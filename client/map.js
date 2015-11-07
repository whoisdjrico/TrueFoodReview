// var map;
//
// function initialize() {
//   var mapOptions = {
//     zoom: 2,
//     center: {lat: -33.865427, lng: 151.196123},
//     mapTypeId: google.maps.MapTypeId.TERRAIN
//   };
//
//   map = new google.maps.Map(document.getElementById('map'),
//       mapOptions);
//
//   // Create a <script> tag and set the USGS URL as the source.
//   var script = document.createElement('script');
//
//   script.src = 'http://localhost:3000/data';
//   document.getElementsByTagName('head')[0].appendChild(script);
// }
//
// // Defines the callback function referenced in the jsonp file.
// function eqfeed_callback(results) {
//   map.data.addGeoJson(results);
// }
//
//





//
// function styleFeature(feature) {
//   console.log(feature);
//   var low = [151, 83, 34];   // color of mag 1.0
//   var high = [5, 69, 54];  // color of mag 6.0 and above
//   var minMag = 1.0;
//   var maxMag = 6.0;
//
//   // fraction represents where the value sits between the min and max
//   var fraction = (Math.min(feature.getProperty('mag'), maxMag) - minMag) /
//       (maxMag - minMag);
//
//   var color = interpolateHsl(low, high, fraction);
//
//   return {
//     icon: {
//       path: google.maps.SymbolPath.CIRCLE,
//       strokeWeight: 0.5,
//       strokeColor: '#fff',
//       fillColor: color,
//       fillOpacity: 2 / feature.getProperty('mag'),
//       // while an exponent would technically be correct, quadratic looks nicer
//       scale: Math.pow(feature.getProperty('mag'), 2)
//     },
//     zIndex: Math.floor(feature.getProperty('mag'))
//   };
// }
//
// function interpolateHsl(lowHsl, highHsl, fraction) {
//   var color = [];
//   for (var i = 0; i < 3; i++) {
//     // Calculate color based on the fraction.
//     color[i] = (highHsl[i] - lowHsl[i]) * fraction + lowHsl[i];
//   }
//
//   return 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)';
// }
//
// var mapStyle = [{
//   'featureType': 'all',
//   'elementType': 'all',
//   'stylers': [{'visibility': 'off'}]
// }, {
//   'featureType': 'landscape',
//   'elementType': 'geometry',
//   'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
// }, {
//   'featureType': 'water',
//   'elementType': 'labels',
//   'stylers': [{'visibility': 'off'}]
// }, {
//   'featureType': 'water',
//   'elementType': 'geometry',
//   'stylers': [{'visibility': 'on'}, {'hue': '#5f94ff'}, {'lightness': 60}]
// }];


// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.97914, lng: -118.41480705731},
    zoom: 12
  });
  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
function setMarkers(map) {
  var getYelp = new Promise(function(fulfil, reject) {
    $.ajax({
      url: 'http://localhost:3000/data',
      data: 'json',
      success: function(data) {
        console.log("I GOT HERE YESSSSSS");
        // console.log(JSON.parse(data));
        // console.log(data);
        var parsed = JSON.parse(data);
        fulfil(parsed[0]);
      },
      error: function(err) {
        console.log(err);
      }
    });
  });

  var food;

  getYelp.then(function(result) {
    food = result;
    console.log('thisisfood');
    console.log(food);
    for (var i = 0; i < food.length; i++) {
      var beach = food[i];
      console.log(beach);
      var marker = new google.maps.Marker({
        position: {lat: beach.lat, lng: beach.long},
        map: map,
        icon: image,
        // shape: shape,
        title: beach.name,
        zIndex: 1
      });
    }
  });
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: './beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };


}
