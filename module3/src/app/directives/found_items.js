function FoundItems () {
  return {
    template: require('../templates/found_items.html'),
    restrict: 'E',
    scope: {
      items: '<',
      query: '<',
      searchesCount: '<',
      dropItem: '&'
    },
    controller: FoundItemsController,
    controllerAs: 'vm',
    bindToController: true
  };
}

function FoundItemsController () {
  
}

export default FoundItems;