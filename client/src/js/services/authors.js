angular.module('boilerblog').service('AuthorsService',
['$http', function($http){

  this.getAuthors = () => {
    return $http.get('authors');
  };

  this.getAuthor = (id) =>{
    return $http.get(`authors/${id}`);
  };

}]);
