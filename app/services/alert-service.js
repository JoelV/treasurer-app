module.exports = function($_, $timeout) {
  var alerts = [];

  service = {
    getAlerts: function() {
      return alerts;
    },
    addAlert: function(alert) {
      alerts.push(alert);
      $timeout(function() {
        service.closeAlert(alert);
      }, 5000);
    },
    closeAlert: function(alert) {
      alerts = $_(alerts).without(alert); 
    }
  };

  return service;
};