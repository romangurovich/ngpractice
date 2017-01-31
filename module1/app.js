(function () {
	'use strict';
	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {
		$scope.foods = '';
		$scope.message = '';
		$scope.status = '';

		$scope.generateMessage = function () {
			var foods = _.compact($scope.foods.split(',').map(function(food) { return food.trim(); }));

			if (foods.length === 0) {
				$scope.message = 'Please enter data first';
				$scope.status = 'unhappy';
			} else if (foods.length <= 3) {
				$scope.message = 'Enjoy!';
				$scope.status = 'happy';
			} else {
				$scope.message = 'Too Much!';
				$scope.status = 'happy';
			}
		}
	}

})();