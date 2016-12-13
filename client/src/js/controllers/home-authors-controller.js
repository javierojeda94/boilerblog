// redefine the module and create the AuthorsController
angular.module('boilerblog').controller('AuthorsController', 
['$scope', function($scope) {
  // $scope'd variable
  $scope.header = 'Autores';
  // local variable
  this.message = 'This is a list of the authors registered on this blog';
}]);
