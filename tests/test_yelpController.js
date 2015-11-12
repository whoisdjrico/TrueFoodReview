var test = require('tape');
var yelpController = require('../server/yelpController.js');
var yelpAssembler = yelpController.yelpAssembler;

test('yelpAssembler should output object with 9 keys with defined values and push to array', function (t) {

  var testObj = {
    name: "Rico",
    rating: 5,
    review_count: 6,
    location: {
      coordinate: {
        latitude: 213,
        longitude: 0
      },
      address: '656 Ridgewood Drive',
      city: 'Daphne',
      state: 'AL',
      postal_code: 36526
    },
  };

  var testArr = [];

  yelpAssembler(testObj,testArr);

  for (var i = 0; i < testArr.length; i++) {
    t.notEqual(testArr[0], undefined);
  }

  t.end();

});
