

var app = angular
  .module('TrueFoodReview.SignUpController', [])
  .controller('SignUpController', function() {

      this.signup = function() {
      console.log("Sending Request to server...");

      // if (this.signupForm.$valid) {
      //   console.log("Sending Request to server...");
      // }
      // else {
      //   this.signupForm.submitted = true;
      // }
  };
});
