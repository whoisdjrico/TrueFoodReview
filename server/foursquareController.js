var request = require('request');
var mydb = require('./postgres.js');
var Promise = require('bluebird');
var fourSquareController = {

	getData: function(req, res, next) {
		var queryURL = 'https://api.foursquare.com/v2/venues/explore?ll=33.97914,-118.41480705731&radius=8000&query=food&client_id=2QFBHZM23MLCX0WRQATSMNV1XSV41LONUF1AOUEHADZVZZBI&client_secret=5TXGRZBINMI4KWOPFFELJ1UUUP3YMRM0VKZJ4XKMRTMQZ4XU&v=20151105';


		var foursquareData = [];

		request(queryURL, function(error, response, data) {
			if (error) {
				console.log(error);
			}
			var promises = new Promise(function(resolve, reject) {
				var stats = JSON.parse(data).response.groups[0].items;

				for(var i = 0; i < stats.length; i++) {
					var obj = {};
					obj.name = stats[i].venue.name;
			        obj.rating = stats[i].venue.rating / 2;
			        obj.review_count = stats[i].venue.ratingSignals;
			        obj.lat = stats[i].venue.location.lat;
			        obj.long = stats[i].venue.location.lng;
			        obj.address = stats[i].venue.location.address;
			        obj.city = stats[i].venue.location.city;
			        obj.state = stats[i].venue.location.state;
			        obj.postal_code = stats[i].venue.location.postalCode;
					foursquareData.push(obj);
				}
				resolve(foursquareData);
			})
			promises.then(function(result) {
				mydb.foursquare(foursquareData);
				res.send(foursquareData);
			})
		});
	}

};

    // get request in the url returns the huge data on the site
    // learn the parameters of the foursquare
    // brush up on async
module.exports = fourSquareController;
