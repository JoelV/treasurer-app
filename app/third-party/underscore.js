var _ = require('underscore');
module.exports = angular.module('underscore', [])
  .factory('$_', function() {
    return _;
  });