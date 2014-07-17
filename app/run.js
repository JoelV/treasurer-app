module.exports = function($rootScope, alertService, authService) {
  $rootScope.alerts = [{type:'success', msg:'Foobar bizz'}];
  $rootScope.getAlerts = alertService.getAlerts;
  $rootScope.closeAlert = alertService.closeAlert;
  $rootScope.addAlert = alertService.addAlert; 
  $rootScope.login = authService.login;
  $rootScope.logout = authService.logout;
  $rootScope.isLogin = authService.isLogin;
};