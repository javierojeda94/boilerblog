// redefine the module and create the AuthorsController
angular.module('boilerblog').controller('ContactController', 
['$scope', function($scope) {
  // $scope'd variable
  $scope.header = 'Contact';
  // local variable
  this.message = 'Say hi. We don\'t bite... Usually';
}]);
