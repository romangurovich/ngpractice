Config.$inject = ['MenuSearchServiceProvider'];
function Config (MenuSearchServiceProvider) {
  MenuSearchServiceProvider.setUrl('https://davids-restaurant.herokuapp.com/menu_items.json');
}

export default Config;