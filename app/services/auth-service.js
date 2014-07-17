module.exports = function($rootScope, $firebase, $firebaseSimpleLogin, $state, firebase) {
  var ref = new Firebase(firebase.url);
  var auth = $firebaseSimpleLogin(ref); 

  return {
    login: function(email, password) {
      if(email !== 'joel.villahermosa@gmail.com') {
        return $rootScope.addAlert({ type:'warning', msg: 'Only Joel is allowed to use this App!!!' });
      }
      auth.$login('twitter', {
        email: email,
        password: password
      }).then(function(user) {
        if(user) {
          console.log("user:", user);
          sessionStorage.setItem('isLogin', 'true');
          $state.go('deposit.list');
          $rootScope.addAlert({ type:'success', msg: 'Welcome Joel!!!!' });
        }
      }).then(function(err) {
        if(err) {
          $rootScope.addAlert({ type:'warning', msg: 'Invalid user/password' });
        }
      });
    },
    logout: function() {
      auth.$logout();
      sessionStorage.removeItem('isLogin');
      $state.go('deposit.login');
      $rootScope.addAlert({ type:'success', msg: 'Bye Joel :D' });
    },
    isLogin: function() {
      return sessionStorage.getItem('isLogin') === 'true';  
    }
  };
};