import angular from 'angular';
import 'angular-ui-router';

angular.module('boilerblog', ["ui.router", "uiRouterStyles"])

.config(['$stateProvider','$urlRouterProvider',
($stateProvider, $urlRouterProvider) => {
  // redirect to '/' when no route matches
  $urlRouterProvider.otherwise('/');
  // declare the states and routes for the app
  $stateProvider.state('app',{
    url: '/',
    templateUrl: 'views/app/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
    data: {
      css: 'css/app/home.css'
    }
  });
  $stateProvider.state('app.authors',{
    url: 'authors',
    templateUrl: 'views/app/home-authors.html',
    controller: 'AuthorsController',
    controllerAs: 'authorsCtrl'
  });
  $stateProvider.state('app.posts',{
    url: 'posts',
    templateUrl: 'views/app/home-posts.html',
    controller: 'PostsController',
    controllerAs: 'postsCtrl'
  });
  $stateProvider.state('app.contact',{
    url: 'contact',
    templateUrl: 'views/app/home-contact.html',
    controller: 'ContactController',
    controllerAs: 'contactCtrl'
  });
}]);
