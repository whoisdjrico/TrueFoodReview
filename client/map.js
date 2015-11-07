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
      },
      // dataType: dataType
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
//
//
//
//
//
// <script>
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 33.97914, lng: -118.41480705731},
//     zoom: 5
//   });
//   setMarkers(map);
// }
// var food = [
// 'Tokyo House', 34.02003, -118.4547,1
// ]
// function setMarkers(map) {
// // Adds markers to the map.
// // Marker sizes are expressed as a Size of X,Y where the origin of the image
// // (0,0) is located in the top left of the image.
// // Origins, anchor positions and coordinates of the marker increase in the X
// // direction to the right and in the Y direction down.
// var image = {
//   url: 'http://thehungrymonkey.co/assets/user_images/content_images/original/Instagram+1429945184.png',
//   // This marker is 20 pixels wide by 32 pixels high.
//   size: new google.maps.Size(20, 32),
//   // The origin for this image is (0, 0).
//   origin: new google.maps.Point(0, 0),
//   // The anchor for this image is the base of the flagpole at (0, 32).
//   anchor: new google.maps.Point(0, 32)
// };
// // Shapes define the clickable region of the icon. The type defines an HTML
// // <area> element 'poly' which traces out a polygon as a series of X,Y points.
// // The final coordinate closes the poly by connecting to the first coordinate.
// var shape = {
//   coords: [1, 1, 1, 20, 18, 20, 18, 1],
//   type: 'poly'
// };
// for (var i = 0; i < food.length; i++) {
//   var beach = food[i];
//   var marker = new google.maps.Marker({
//     position: {lat: beach[1], lng: beach[2]},
//     map: map,
//     icon: image,
//     // shape: shape,
//     title: beach[0],
//     zIndex: beach[3]
//   });
// }
// }
// </script>
