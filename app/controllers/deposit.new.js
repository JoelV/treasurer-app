module.exports = function($scope, depositService, $state) {
  $scope.mode = 'New';

  $scope.toggleCalendar = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = !$scope.opened;
  };

  $scope.save = function(deposit) {
    deposit.total = deposit.can + deposit.tradition;
    depositService.save(deposit).then(function(ref) {
      $scope.addAlert({ type: 'success', msg: 'Successfully created a deposit' });
      $state.go('deposit.list');
    });
  };
};