var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

var fusionTableController = {
  getData: function(req, res, next) {
    request('https://www.googleapis.com/fusiontables/v1/tables/1997wo1poMe6iv7VXz1P5Dj1fkO-vud48QgNZwu1J?key=AIzaSyCbwSyQdbIk3TSzQPXWqJvO0OzhJJXXI2Y', function(error, res, data) {
      if(error) console.log(error);

      var fusionTable = JSON.parse(data);
      console.log(fusionTable.type);

      var full = [];
      fusionTable.type.forEach(function(item){
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
      });
    });
  }
}


module.exports = fusionTableController;
