// redefine the module and create the AuthorsController
angular.module('boilerblog').controller('PostsController', 
['$scope', function($scope) {
  // $scope'd variable
  $scope.header = 'Posts';
  // local variable
  this.message = 'This is a list of the posts publichsed by our authors';
}]);
