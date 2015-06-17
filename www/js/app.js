// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular

.module('starter', ['ionic'])

.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

.controller('SermonCtrl', function($scope, $http) {

	ionic.Platform.ready(function() {

        // Analytics
	    if(typeof analytics !== undefined) {
            // analytics.debugMode();
            analytics.startTrackerWithId("UA-53384235-4");
        } else {
            console.log("Google Analytics Unavailable");
        }

        // Parse
        parsePlugin.initialize('Y0Lp6L6KAFoBehaNDXsla5FTmmOIqgjDmhBLspSY', 'kFzbp2OuGtgW7NTC8zJ9nhoknPi3u5DimBePMiGp', function() {
            parsePlugin.subscribe('ScriptureOfTheDay', function() {
                parsePlugin.getInstallationId(function(id) {
                    /**
                     * Now you can construct an object and save it to your own services, or Parse, and corrilate users to parse installations
                     */
                     var install_data = {
                        installation_id: id,
                        channels: ['ScriptureOfTheDay']
                     }
                     /**
                     */
                }, function(e) {
                    alert('error');
                });
            }, function(e) {
                alert('error');
            });
        }, function(e) {
            alert('error');
        });
	});

	$http.get('https://www.compasshb.com/feed/sermons.json').then(function(res) {
        $scope.sermons = res.data;
        analytics.trackView("Main Controller");
    });

    $http.get('https://www.compasshb.com/api/v1/passages').then(function(res) {
        $scope.passages = res.data;
        analytics.trackView("Scripture of the Day Controller");
    });

    $scope.doRefresh = function() {
        $http.get('https://www.compasshb.com/feed/sermons.json')
            .success(function(newItems) {
                $scope.sermons = newItems;
            })
            .finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            }
        );
    };

    $scope.openVideo = function (url) {
    	window.open(url, '_blank','location=yes');
    }

    $scope.initEvent = function() {
        if(typeof analytics !== undefined) {
            analytics.trackEvent("Category", "Action", "Label", 25);
        }
    }

});
