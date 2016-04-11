'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('GameCtrl', function ($scope, $http, $interval, $cookieStore) {
    var EXPLORE = 3;

    var game     = this;
    game.data    = {};
    game.newGame = true;
    
    /************************************
     * Game Data
     ***********************************/ 
    game.pointRate = function(element) {
    	return (game.data[element].constant * game.data[element].multiplier).toFixed(2);
    };

    game.pointTotal = function() {
      var totalPoints = 0;
      for(var element in game.data) {
        if(game.data[element].hasOwnProperty('total')) {
          totalPoints += game.data[element].total;
        }
      }
      return totalPoints;
    };

    game.ventureForth = function() {
      var request = $http.get('/monster/getRandom/');
      request.success(function (monster) {
        if(!game.data.hasOwnProperty(monster.type)) {
          game.data[monster.type] = {total: 0, constant: 0, multiplier: 0};
        }
        game.data[monster.type].constant   += monster.basePower;
        game.data[monster.type].multiplier += monster.powerMultiplier;

        game.data.party.push(monster);
      });
    };

    /************************************
     * New Game
     ***********************************/
    game.start = function(element) {
    	game.newGame = false;

      var request = $http.get('/monster/getStarter/' + element);

      // we'll come back to here and fill in more when ready
      request.success(function (monster) {
        game.data[element] = {};

        game.data[element].total      = 0;
        game.data[element].constant   = monster.basePower;
        game.data[element].multiplier = monster.powerMultiplier;

        game.data.party = [monster];

      });
    };

    /************************************
     * Timing Loop
     ***********************************/
    var delay = 1000; // One second timer
    var timer = $interval(function() {
    	for(var element in game.data) {
        if(game.data[element].hasOwnProperty('total')) {
          game.data[element].total += parseFloat(game.pointRate(element));
        }
    	}

      if(game.pointTotal() > EXPLORE) {
        game.data.canExplore = true;
      }

    }, delay);
    
    /************************************
     * Game Saving and Initialization
     ***********************************/
    var minute = 60000; // A minute in milliseconds
    var autoSaveTimer = $interval(function () {
      if(game.newGame === false) {
    	console.log('Saving game...');
        $cookieStore.put('version', 1);
        $cookieStore.put('data', game.data);
      }
    }, minute);

	var init = function () {
        if($cookieStore.get('version') === 1) {
            game.data = $cookieStore.get('data');
            game.newGame = false;
        }
    };

    init();
    /************************************
     * Side Navbar
     ***********************************/
     angular.element(document).ready(function () {
        angular.element('[data-toggle=offcanvas]').click(function () {
          if (angular.element('.sidebar-offcanvas').css('background-color') === 'rgb(255, 255, 255)') {
            angular.element('.list-group-item').attr('tabindex', '-1');
          } else {
            angular.element('.list-group-item').attr('tabindex', '');
          }
          angular.element('.row-offcanvas').toggleClass('active');
          
        });
      });

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
