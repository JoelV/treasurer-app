module.exports = function($scope, depositService, $state) {
  $scope.mode = 'New';

  $scope.toggleCalendar = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = !$scope.opened;
  };

  $scope.save = function(deposit) {
    deposit.can = deposit.can || '' ? deposit.can : 0;
    deposit.tradition = deposit.tradition || '' ? deposit.tradition : 0; 
    deposit.total = deposit.can + deposit.tradition;
    depositService.save(deposit).then(function(ref) {
      $scope.addAlert({ type: 'success', msg: 'Successfully created a deposit' });
      $state.go('deposit.list');
    });
  };
};
