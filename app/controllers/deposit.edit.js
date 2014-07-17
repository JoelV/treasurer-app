module.exports = function($scope, depositService, $stateParams, $state, $moment) {
  $scope.mode = 'Edit';
  var snapshotData;

  depositService.get($stateParams.id).then(function(data) {
    snapshotData = data;
    $scope.deposit = data.value;
  });

  $scope.save= function(deposit) {
    deposit.total = deposit.can + deposit.tradition;
    snapshotData.value = deposit;  
    depositService.update(snapshotData).then(function() {
      var msg = ['Deposit on', $moment(deposit.date).format('MM-DD-YYYY'), 'edited successfully'].join(' ');
      $scope.addAlert({ type: 'success', msg: msg });
      $state.go('deposit.list');
    });
  };
};