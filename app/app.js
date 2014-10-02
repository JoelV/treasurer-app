require('firebase/firebase.js');
require('angular/angular.js');
require('ui-router/release/angular-ui-router.js');
require('firebase-simple-login/firebase-simple-login.js');
require('angularFire/angularfire.js');
require('./third-party/moment');
require('ui-bootstrap/ui-bootstrap-tpls.js');
require('./third-party/underscore');

var app = angular.module('TreasurerApp', ['ui.router', 'firebase', 'moment', 'ui.bootstrap', 'underscore'])

app
  .config(require('./states.js'))
  .run(require('./run.js'))
  .factory('depositService', require('./services/deposit-service.js'))
  .factory('alertService', require('./services/alert-service.js'))
  .factory('authService', require('./services/auth-service.js'))
  .filter('cashify', require('./filters/cashify.js'))
  .value('firebase', { url: 'https://treasurerapp.firebaseio.com' });

