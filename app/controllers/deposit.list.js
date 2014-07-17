module.exports = function($scope, $moment, depositService, $_) {
  $scope.deposits = depositService.getAll();

  $scope.delete = function(deposit) {
    depositService.delete(deposit).then(function(e) {
      var msg = ['Deposit on', $moment(deposit.value.date).format('MM-DD-YYYY'), 'deleted'].join(' ');
      $scope.addAlert({ type: 'warning', msg: msg }); 
      $scope.deposits = $_($scope.deposits).without(deposit);
    });
  };
};