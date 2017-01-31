(function () {
	'use strict!'

	var toBuy = [{ name: 'apples', quantity: 10 }, { name: 'loaves of bread', quantity: 2 },
			{ name: 'cartons of milk', quantity: 3 }, { name: 'peppers', quantity: 6 }];

	angular.module('ShoppingListCheckOff', [])
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
		.constant('toBuy', toBuy);

	ShoppingListCheckOffService.$inject = ['toBuy'];
	function ShoppingListCheckOffService (toBuy) {
		var toBuy = toBuy,
				alreadyBought = [],
				service = this;

		service.toBuy = function () {
			return toBuy;
		};

		service.alreadyBought = function () {
			return alreadyBought;
		};

		service.buyItem = function (item) {
			_.remove(toBuy, item);
			alreadyBought.push(item);
		};
	}

})();