var yelp = require("yelp").createClient({
  consumer_key: "eZS4YZtBkwGBT1qo_6sugQ", 
  consumer_secret: "mS47iXf3aj-YlFEdYDPILaekjq8",
  token: "LpqL9TevnnYv-kUe2bDcWfKTUKf1AO4k",
  token_secret: "_jIqJooamsbGQ2ew9sG7M0-bddI"
});


var yelpController = {
  getData: function(req, res, next) {
    


  // See http://www.yelp.com/developers/documentation/v2/search_api
  yelp.search({term: "food", location: "Montreal"}, function(error, data) {
    console.log(error);
    console.log(data);
   
  });

  // See http://www.yelp.com/developers/documentation/v2/business
  yelp.business("yelp-san-francisco", function(error, data) {
    console.log(error);
    console.log(data);
  });
   res.send('hello')



 


  }//closes getData
}//closes scrapeController

module.exports = yelpController;




 