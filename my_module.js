var fs = require('fs');
var path = require('path');
module.exports = function (directory, extension, callback) {
  var files = [];
  fs.readdir(directory, function (err, list) {
    if (err) {
      return callback(err);
    }
    list.forEach(function (filename) {
      if (path.extname(filename) === '.' + extension) {
        files.push(filename);
      }
    });
    return callback(null, files);
  });
}