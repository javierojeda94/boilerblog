// redefine the module and create the AuthorsController
angular.module('boilerblog').controller('PostsController', 
['$scope','$http', function($scope, $http) {

  $scope.posts = [];

  $http.get('/posts').then(getPostsSuccess, getPostsError);

  function getPostsSuccess(res){
    $scope.posts = res.data;
  }

  function getPostsError(res){
    $scope.posts = res.data;
  }

}]);
