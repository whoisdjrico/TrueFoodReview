var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

var openTableController = {
  getData: function(req, res, next) {
    request('https://opentable.herokuapp.com/api/restaurants?postal_code=90212', function(error, res, data) {
      if(error) console.log(error);

      var openTableData = JSON.parse(data);
      console.log(openTableData);

      var full = [];
      // openTableData.restaurants.forEach(function(item){
      //   var obj = {};
      //   obj.name = item.name;
      //   obj.address = item.address;
      //   obj.city = item.city;
      //   obj.state = item.state;
      //   obj.postal_code = item.postal_code;
      //   obj.phone = item.phone;
      //   obj.reserve_url = item.reserve_url;
      //   obj.mobile_reserve = item.mobile_reserve;
      //   obj.image_url = item.image_url;
      //   full.push(obj);
      //   // console.log(JSON.stringify(obj));
      // });
    });
  }
}


module.exports = openTableController;
