var mydb = require('./postgres.js')

var yelp = require("yelp").createClient({
  consumer_key: "eZS4YZtBkwGBT1qo_6sugQ",
  consumer_secret: "mS47iXf3aj-YlFEdYDPILaekjq8",
  token: "LpqL9TevnnYv-kUe2bDcWfKTUKf1AO4k",
  token_secret: "_jIqJooamsbGQ2ew9sG7M0-bddI"
});
var mydb = require('./postgres-orm');


var yelpController = {
  getData: function(req, res, next) {
    var yelpData = [];
    // See http://www.yelp.com/developers/documentation/v2/search_api

    yelp.search({term: "Restaurant",limit: 20,offset: 20, sort:2, location: "Playa Vista, ca", radius_filter: 20000}, function(error, data) {

      if(error) console.log(error);

      data.businesses.forEach(function(item){
        var obj = {};
        obj.name = item.name;
        obj.rating = item.rating;
        obj.review_count = item.review_count;
        obj.lat = item.location.coordinate.latitude;
        obj.long = item.location.coordinate.longitude;
        obj.address = item.location.address;
        obj.city = item.location.city;
        obj.state = item.location.state_code;
        obj.postal_code = item.location.postal_code;
        yelpData.push(obj);
        console.log(obj);
      });

      mydb.yelp(yelpData);

      res.send(yelpData);
  });



   //https://api.yelp.com/v2/search/?term=Restaurant&location=Playa Vista, CA&radius_filter=8000





  }//closes getData
}//closes scrapeController

module.exports = yelpController;
