import angular from 'angular';
import 'angular-ui-router';

angular.module('boilerblog', ["ui.router"])

.config(['$stateProvider','$urlRouterProvider',
($stateProvider, $urlRouterProvider) => {
  // redirect to '/' when no route matches
  $urlRouterProvider.otherwise('/');
  // declare the states and routes for the app
  $stateProvider
  .state('app',{
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  });
}]);
