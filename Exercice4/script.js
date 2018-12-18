var app = angular.module('app', []);

app.controller('voituresCtrl', function($scope, $http) {
  $http.get('voiture.json')
  .then(function(response){
    $scope.voiture = response.data;
    });
  });
