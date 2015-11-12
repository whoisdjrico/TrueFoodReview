var request = require('request');

var opentableController = {

  getData: function (req, res, next) {
    request('http://opentable.herokuapp.com/api/restaurants?zip=90094', function (error, res, data) {
      if (error) console.log(error);
      var apiData = JSON.parse(data);
      var migrate = [];
      apiData.restaurants.forEach(function(item) {
        var obj = {};
        obj.name = item.name,
        obj.address = item.address,
        obj.city = item.city,
        obj.state = item.city,
        obj.postal_code = item.postal_code,
        obj.phone = item.phone,
        obj.reserve_url = item.reserve_url;
        obj.mobile_reserve_url = item.reserve_url,
        obj.image_url = item.image_url
        migrate.push(obj);
      });
      console.log(migrate);
    });
  }

};

module.exports = opentableController;
