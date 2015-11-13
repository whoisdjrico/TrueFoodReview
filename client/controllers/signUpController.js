

var app = angular
  .module('TrueFoodReview.SignUpController', ['ui.router'])
  .controller('SignUpController', ['$scope', '$http', SignUpController])

  function SignUpController($scope, $http) {
      var vm = this;
      vm.signup = function(event) {
      console.log('Test');

      var data = $.param({
            firstName: vm.firstName,
            lastName: vm.lastName,
            email: vm.email,
            password: vm.password
      });

      var config = {
          headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
          }
      }
      console.log(data);
      $http.post('/signup', data, config);
      //   .success(function (data, status, headers, config) {
      //       vm.PostDataResponse = data;
      // })
      //   .error(function (data, status, header, config) {
      //       vm.ResponseDetails = "Data: " + data +
      //         "<hr />status: " + status +
      //         "<hr />headers: " + header +
      //         "<hr />config: " + config;
    // });
  };
};
