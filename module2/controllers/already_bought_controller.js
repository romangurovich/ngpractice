(function () {
	'use strict!'

	angular.module('ShoppingListCheckOff')
		.controller('AlreadyBoughtController', AlreadyBoughtController);

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var alreadyBought = this;
		var shoppingService = ShoppingListCheckOffService;

		alreadyBought.items = shoppingService.alreadyBought();

		alreadyBought.display = function (item, index) {
			return index + '. ' + 'Bought ' + item.quantity + ' ' + item.name; 
		};
	}
})()