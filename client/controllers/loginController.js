// 'use strict';

var app = angular
  .module('TrueFoodReview.LoginController', [])
  .controller('LoginController', function() {

      this.login = function() {
      console.log("Sending Request to server...");
      if (this.loginForm.$valid) {
        console.log("Sending Request to server...");
      }
      else {
        this.loginForm.submitted = true;
      }
  };
});
