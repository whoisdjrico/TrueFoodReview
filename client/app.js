var app = angular
  .module('myApp',[
    'ui.router',
    'TrueFoodReview.HomeController',
    'TrueFoodReview.LoginController',
    'TrueFoodReview.SignUpController',
    'TrueFoodReview.MapController'
    ]);

app.config(configFunction);

function configFunction($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('state1', {
      url: '/',
      templateUrl: './partials/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })

    .state('login', {
        url: '/login',
        templateUrl: './views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
    })

    .state('signup', {
        url: '/signup',
        templateUrl: './views/signup.html',
        controller: 'SignUpController',
        controllerAs: 'vm'
    })

    .state('main', {
        url: '/main',
        templateUrl: './views/main.html',
        controller: 'MapController',
        controllerAs: 'vm'
    })

    // .state('home', {
    //     url: '/home',
    //     templateUrl: './views/home.html',
    //     controller: 'HomeController',
    //     controllerAs: 'vm'
    // })


}
