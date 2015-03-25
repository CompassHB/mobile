// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('SermonCtrl', function($scope, $http) {
  $http.get('http://www.compasshb.com/feed/sermons.json')
    .then(function(res){
      $scope.sermons = res.data;
    });

    $scope.openVideo = function (url) {
    	window.open(url ,'_blank','location=yes');
    }

});
