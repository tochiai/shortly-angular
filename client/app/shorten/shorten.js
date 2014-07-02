angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    Links.addLink($scope.newLink)
    .then(function (response){
      $scope.loading = false;
      $location.path('/links');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

});
