var fs = require('fs');

module.exports = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/deposit/login');
  $stateProvider
    .state('deposit', {
      url: '/deposit',
      template: fs.readFileSync(__dirname + '/views/deposit.html', 'utf-8')
    })
    .state('deposit.login', {
      url:'/login',
      template: fs.readFileSync(__dirname + '/views/deposit.login.html', 'utf-8')
      //controller: require('./controllers/deposit.login.js')
    })
    .state('deposit.list', {
      url: '/list',
      template: fs.readFileSync(__dirname + '/views/deposit.list.html', 'utf-8'),
      controller: require('./controllers/deposit.list.js') 
    })
    .state('deposit.new', {
      url: '/new',
      template: fs.readFileSync(__dirname + '/views/form.html', 'utf-8'),
      controller: require('./controllers/deposit.new.js') 
    })
    .state('deposit.edit', {
      url: '/edit/:id',
      template: fs.readFileSync(__dirname + '/views/form.html', 'utf-8'),
      controller: require('./controllers/deposit.edit.js')
    });
};