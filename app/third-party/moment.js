var moment = require('moment');
module.exports = angular.module('moment', [])
  .factory('$moment', function() {
    return moment;
  });
