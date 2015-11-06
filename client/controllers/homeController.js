var app = angular
  .module('TrueReview.HomeController',['ui.router'])
  .controller('HomeController', ['$scope', HomeController])


function HomeController($scope) {
  console.log('hello');
  $scope.loadMap = function(){
   console.log('hello');  
  	// map = new google.maps.Map(document.getElementById('map'), {
   //  	center: {lat: -34.397, lng: 150.644},
   //  	zoom: 8
  	// });



  }
}

