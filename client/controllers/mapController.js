var app = angular
  .module('TrueFoodReview.MapController', [])
  .controller('MapController', function() {

      this.map = function() {
      console.log("Sending Request to server...");

      // if (this.signupForm.$valid) {
      //   console.log("Sending Request to server...");
      // }
      // else {
      //   this.signupForm.submitted = true;
      // }
  };
});
