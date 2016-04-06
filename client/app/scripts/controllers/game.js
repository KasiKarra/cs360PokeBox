'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GameCtrl', function ($scope, $interval, $cookieStore) {
    var game = this;
    game.data = {};

    /************************************
     * Game Data
     ***********************************/
    game.data.points = 0;

    game.data.pointMultiplier = 0.25;
    game.data.pointConstant   = 1;

    game.pointRate = function() {
    	return (game.data.pointMultiplier * game.data.pointConstant).toFixed(2);
    };

    /************************************
     * Timing Loop
     ***********************************/
    var delay = 1000; // One second timer
    var timer = $interval(function() {
      console.log(game.data.points);
    	game.data.points += parseFloat(game.pointRate());
    }, delay);

    /************************************
     * Game Saving and Initialization
     ***********************************/
    var minute = 60000; // A minute in milliseconds
    var autoSaveTimer = $interval(function () {
    	console.log('Saving game: ' + game.data.points);
        $cookieStore.put('version', 1);
        $cookieStore.put('data', game.data);
    }, minute);

	var init = function () {
        if($cookieStore.get('version') === 1) {
            game.data = $cookieStore.get('data');
        }
    };

    init();

    /************************************
     * Controller Cleanup
     ***********************************/
	$scope.$on('$destroy', function () {
        if (angular.isDefined(timer)) {
            $interval.cancel(timer);
            timer = undefined;
        }

        if (angular.isDefined(autoSaveTimer)) {
            $interval.cancel(autoSaveTimer);
            autoSaveTimer = undefined;
        }
    });

  });
