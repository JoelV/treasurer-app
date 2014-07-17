module.exports = function($firebase, $q, $rootScope, firebase) {
  var firebaseUrlDeposit = firebase.url + '/deposits'; 
  var ref = $firebase(new Firebase(firebaseUrlDeposit));

  return {
    save: function(deposit) {
      return ref.$add(deposit);
    },
    getAll: function() {
      var deposits = [];
      ref.$on('child_added', function(data) {
        deposits.push(data.snapshot);
      });
      return deposits; 
    },
    delete: function(deposit) {
      return ref.$remove(deposit.name);
    },
    get: function(id) {
      var defer = $q.defer();
      var singleRef = $firebase(new Firebase(firebaseUrlDeposit + '/' + id));
      singleRef.$on('value', function(data) {
        defer.resolve(data.snapshot);
      });
      return defer.promise;
    },
    update: function(deposit) {
      var singleRef = $firebase(new Firebase(firebaseUrlDeposit + '/' + deposit.name))
      return singleRef.$update(deposit.value)
    }
  };
};