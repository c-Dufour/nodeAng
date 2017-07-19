angular.module('chatApp',['ngRoute']).config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home/login', {
          templateUrl: 'login.html',
          controller: 'loginCtrl'
        }).
        otherwise('/phones');
    }
  ]);