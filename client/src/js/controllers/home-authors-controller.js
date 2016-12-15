// redefine the module and create the AuthorsController
angular.module('boilerblog').controller('AuthorsController', 
['$scope','AuthorsService','authors','author', function($scope, AuthorsService, authors, author) {
  $scope.authors = authors.data;
  $scope.author = author.data;
}]);
