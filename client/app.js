var app = angular
  .module('myApp',[
    'ui.router',
    // 'TrueFoodReview.InfoFactory',
    'TrueFoodReview.HomeController',
    'TrueFoodReview.LoginController'
    ]);

app.config(configFunction);

function configFunction($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('state1', {
      url: '/',
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })

    .state('login', {
        url: '/login',
        templateUrl: './views/login.html',
        controller: 'LoginController as vm'
    })
    //
    // .state('signup', {
    //     url: '/signup',
    //     templateUrl: './views/signup.html',
    //     controller: 'SignUpController'
    // })

}
