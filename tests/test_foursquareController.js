var test = require('tape');
var foursquareController = require('../server/foursquareController.js');
var fsAssembler = foursquareController.fsAssembler;

test('Request should return data', function(t) {
  function 

  fourSquareController.getData(null,null,null) {

  }
});

test('fsAssembler should output object with 9 keys with defined values and push to array', function(t) {
  var testObj = {
    venue: {
      name: "Medieval Times",
      rating: 5,
      ratingSignals: 15,
      location: {
        lat: 1234,
        lng: 12,
        address: '3456 Camelot Lane',
        city: 'Edinborough',
        state: 'AL',
        postalCode: 36526
      }
    }
  };

  var testArr1 = [];

  for (var i = 0; i < 10; i++) {
    testArr1.push(testObj);
  }

  var testArr2 = [];

  fsAssembler(testArr1,testArr2);

  var broken = false;

  for (i = 0; i < testArr2.length; i++) {
    if (testArr2[i] === undefined) {
      broken = true;
    }
    for (var key in testArr2[i]) {
      if (testArr2[i][key] === undefined) {
        broken = true;
      }
    }
  }

  t.equal(broken,false);

  t.end();
});
