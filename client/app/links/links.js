angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks().then(function(linkData){
      $scope.data.links = linkData;
    }).catch(function (error) {
      console.error(error);
    });
  };
  $scope.getLinks();
});
