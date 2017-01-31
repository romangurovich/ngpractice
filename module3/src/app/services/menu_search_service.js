function MenuSearchServiceProvider () {
  let provider = this;
  let url;

  provider.setUrl = (value) => {
    url = value;
  };

  provider.$get = ($http) => {
    return new MenuSearchService(url, $http);
  };
}

MenuSearchService.$inject = ['url', '$http'];
function MenuSearchService (url, $http) {
  this.getMatchedMenuItems = (searchTerm) => {
    return $http.get(url).then((result) => {
      // process result and only keep items that match
      let foundItems = result.data.menu_items.filter((item) => {
        return item.description.match(searchTerm);
      });

      // return processed items
      return foundItems;
    });
  };
}

export default MenuSearchServiceProvider;