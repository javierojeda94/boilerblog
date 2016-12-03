// redefine the module and create the HomeController
angular.module('boilerblog').controller('HomeController', 
['$scope', function($scope) {
  // $scope'd variable
  $scope.header = 'Boilerblog!';
  // local variable
  this.message = 'Welcome to this boilerplate site for a blog';
}]);
