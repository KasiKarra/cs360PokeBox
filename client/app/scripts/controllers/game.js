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
    var game     = this;
    game.data    = {};
    game.newGame = true;

    /************************************
     * Game Data
     ***********************************/ 
    game.pointRate = function(element) {
    	return (game.data[element].constant * game.data[element].multiplier).toFixed(2);
    };

    /************************************
     * New Game
     ***********************************/
    game.start = function(element) {
    	game.newGame = false;
    	
    	game.data[element] = {};

    	game.data[element].total      = 0;
    	game.data[element].constant   = 1;
    	game.data[element].multiplier = 0.25;
    };

    /************************************
     * Timing Loop
     ***********************************/
    var delay = 1000; // One second timer
    var timer = $interval(function() {
    	for(var element in game.data) {
    		game.data[element].total += parseFloat(game.pointRate(element));
    	}
    }, delay);

    /************************************
     * Game Saving and Initialization
     ***********************************/
    var minute = 60000; // A minute in milliseconds
    var autoSaveTimer = $interval(function () {
    	console.log('Saving game...');
        $cookieStore.put('version', 1);
        $cookieStore.put('data', game.data);
    }, minute);

	var init = function () {
        if($cookieStore.get('version') === 1) {
            game.data = $cookieStore.get('data');
            game.newGame = false;
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
