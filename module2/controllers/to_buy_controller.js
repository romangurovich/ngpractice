(function () {
	'use strict!'

	angular.module('ShoppingListCheckOff')
		.controller('ToBuyController', ToBuyController);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var toBuy = this;
		var shoppingService = ShoppingListCheckOffService;

		toBuy.items = shoppingService.toBuy();

		toBuy.display = function (item, index) {
			return index + '. ' + 'Buy ' + item.quantity + ' ' + item.name; 
		};

		toBuy.buyItem = function (item) { shoppingService.buyItem(item) };
	}
})()