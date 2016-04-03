var request = require('request');
exports.get=function (callback) {
  request('http://localhost:3000/badges',function (err,response,body) {
            callback(err,JSON.parse(body));
  });
}
