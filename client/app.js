var app = angular
  .module('myApp',[
    'ui.router',
    // 'TrueFoodReview.InfoFactory',
    'TrueFoodReview.HomeController'

    ]);

app.config(configFunction);

function configFunction($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('state1', {
      url: '/',
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })

}
