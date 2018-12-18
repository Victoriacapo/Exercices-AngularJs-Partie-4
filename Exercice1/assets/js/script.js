var app = angular.module('app', []);
app.controller('testCtrl', function($scope) {
  $scope.count = 0;
  $scope.myfunction = function() {
    $scope.count++;
    }
    $scope.myfunction1 = function() {
      $scope.count--;
    }
  });
